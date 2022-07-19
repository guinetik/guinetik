package sushi;

import java.util.ArrayList;
import java.util.HashMap;

public class SushiOrderManager {

    private final HashMap<Integer, ArrayList<String>> orders;
    int currentSeatId;

    public SushiOrderManager() {
        /* initialize class state */
        orders = new HashMap<>();
        currentSeatId = 1;
    }

    public void addOrder(ArrayList<SushiOrder> request) {
        request.forEach(order -> {
            if (orders.containsKey(order.getSeatId())) {
                orders.get(order.getSeatId()).addAll(order.getMenuItemIds());
            } else {
                orders.put(order.getSeatId(), new ArrayList<>(order.getMenuItemIds()));
            }
        });
    }

    public SushiItem nextItem() {
        if (orders.isEmpty()) {
            return null;
        }

        while (!orders.isEmpty()) {
            if (orders.containsKey(currentSeatId)) {
                int seatId = currentSeatId;
                String menuItemId = orders.get(seatId).get(0);
                orders.get(seatId).remove(0);
                if (orders.get(seatId).size() == 0)
                    orders.remove(seatId);
                currentSeatId++;
                if (currentSeatId > 16)
                    currentSeatId = 1;
                return new SushiItem(seatId, menuItemId);
            } else {
                currentSeatId++;
                if (currentSeatId > 16)
                    currentSeatId = 1;
            }
        }
        return null;
    }
}