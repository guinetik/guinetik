import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class Solution {
    public static void main(String[] args) {
        String message = "Lorem ipsum dolor sit amet consectetur adipiscing elit";
        int k = 11;
        String solution = new Solution().solution(message, k);
        System.out.println(solution + "!!" + solution.length() + "++");

        int[] P = {1, 4, 1};
        int[] S = {1, 5, 1};
        System.out.println(new Solution().solution(P, S));

        int[] A = {5, 19, 8, 1};
        System.out.println(new Solution().solution(A));
    }

    public int solution(int[] A) {
        int totalPollution = Arrays.stream(A).sum(); 
        float desiredPollution = totalPollution/2;
        float removedPollution = 0;
        int totalFilters = 0;
        List<Integer> list = Arrays.stream(A).boxed().collect(Collectors.toList());
        Collections.sort(list, Collections.reverseOrder());
        for(int i = 0; i < list.size(); i++) {
            totalFilters++;
            removedPollution += (float) list.get(i)/2;
            if(removedPollution >= desiredPollution) {
                break;
            }
        }
        return totalFilters;
    }


    public int solution(int[] P, int[] S) {
        // given two arrays P and S consisting of N integers each, return the minimum number of cars needed to take all the friends on holiday


        // Using Arrays.stream, sum the elements of P
        int totalPeople = Arrays.stream(P).sum();
        System.out.println("totalPeople: " + totalPeople);
        int totalCars = 0;
        List<Integer> list = Arrays.stream(S).boxed().collect(Collectors.toList());
        System.out.println("list: " + list);
        Collections.sort(list, Collections.reverseOrder());
        System.out.println("list: " + list);
        int idx = 0;
        while(totalPeople > 0) { totalPeople -= list.get(idx); idx++; }
        totalCars = idx;
        return totalCars;
    }

    public String solution(String message, int K) {
        // return the message cropped to no more than K charactes. 
        //the message may not crop away part of a word. 
        // the output message may not end with a space. the output message may not exceed the K-character limit; the output message should be as long as possible

        String[] words = message.split(" ");
        StringBuilder sb = new StringBuilder();
        int count = 0;
        for (String word : words) {
            if (count + word.length() > K) {
                break;
            }
            sb.append(word);
            sb.append(" ");
            count += word.length() + 1;
        }
        return sb.toString().trim();
        
    }
}
