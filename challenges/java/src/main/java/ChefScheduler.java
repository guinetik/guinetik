import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

final public class ChefScheduler {

	public static final Set<String> DAYZ = new LinkedHashSet<>(
			Arrays.asList("mon", "tue", "wed", "thu", "fri", "sat", "sun"));

	public static final int DAYZ_OF_THE_WEEK = DAYZ.size();

	public static final int MAX_ALLOWED_SHIFTS = 5;

	public static final int MAX_ALLOWED_SHIFTS_PER_DAY = 2;

	public static final class Chef {
		private final String name;
		private int assignedShifts = 0;
		private final Set<String> requestedDaysOff;
		private Set<String> actualDaysOff;

		public Chef(String name, String... days) {
			this.name = name;
			this.requestedDaysOff = new HashSet<>(Arrays.asList(days));
		}

		public Set<String> reduceDaysOff(Map.Entry<String, ArrayList<String>> entry) {
			this.actualDaysOff = new HashSet<String>(DAYZ);
			for (String day : entry.getValue()) {
				actualDaysOff.remove(day);
			}
			return actualDaysOff;
		}

		public void addShift() {
			this.assignedShifts++;
		}

		public int getShifts() {
			return assignedShifts;
		}

		@Override
		public String toString() {
			return "Chef [name=" + name + ", requestedDaysOff=" + requestedDaysOff + ", actualDaysOff=" + actualDaysOff
					+ "]";
		}

		public void validate() {
			if (assignedShifts > MAX_ALLOWED_SHIFTS) {
				throw new IllegalStateException("Too many shifts assigned to " + name + ". " + assignedShifts);
			}
			int totalWorkHours = assignedShifts * 8;
			if (totalWorkHours > 40) {
				throw new IllegalStateException("Too many hours assigned to " + name + ". " + assignedShifts);
			}

		}
	}

	private List<Chef> chefs;

	public static final Chef make(String name, ArrayList<String> requestedDaysOff) {
		return new Chef(name, requestedDaysOff.toArray(new String[requestedDaysOff.size()]));
	}

	public final ChefScheduler map(HashMap<String, ArrayList<String>> requests) {
		this.chefs = new ArrayList<>();
		for (Map.Entry<String, ArrayList<String>> entry : requests.entrySet()) {
			Chef c = make(entry.getKey(), entry.getValue());
			c.reduceDaysOff(entry);
			chefs.add(c);
		}
		return this;
	}

	public final ChefScheduler sort(Comparator<Chef> comparator) {
		this.chefs = chefs.stream().sorted(comparator).collect(Collectors.toList());
		return this;
	}

	public boolean reduce() {
		Map<String, Integer> schedule = DAYZ
				.stream()
				.reduce(new LinkedHashMap<String, Integer>(), (map, day) -> {
					map.put(day, map.keySet().size());
					return map;
				}, (result, remainder) -> result);
		int[] shifts = new int[DAYZ_OF_THE_WEEK];
		for (Chef chef : chefs) {
			for (String day : chef.actualDaysOff) {
				if (schedule.size() == 0) {
					return true;
				}
				if (!schedule.containsKey(day))
					continue;
				if (chef.getShifts() >= MAX_ALLOWED_SHIFTS)
					break;
				shifts[schedule.get(day)]++;
				chef.addShift();
				if (shifts[schedule.get(day)] == MAX_ALLOWED_SHIFTS_PER_DAY)
					schedule.remove(day);
			}
		}
		try {
			chefs.forEach(Chef::validate);
		} catch (IllegalStateException e) {
			System.out.println(e.getMessage());
			return false;
		}
		return schedule.size() == 0;
	}

	public static boolean schedulable(HashMap<String, ArrayList<String>> requests) {
		return new ChefScheduler()
				.map(requests)
				.sort(Comparator.comparingInt((Chef e) -> e.actualDaysOff.size()))
				.reduce();
	}
}