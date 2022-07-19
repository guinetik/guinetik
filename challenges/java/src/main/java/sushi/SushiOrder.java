package sushi;
import java.util.ArrayList;

public class SushiOrder {

    private final int seatId;
    private final ArrayList<String> menuItemIds;

    public SushiOrder(int seatId, ArrayList<String> menuItemIds) {
        this.seatId = seatId;
        this.menuItemIds = menuItemIds;

    }

    public int getSeatId(){
        return this.seatId;
    }

    public ArrayList<String> getMenuItemIds(){
        return this.menuItemIds;
    }

    @Override
    public String toString() {
        return "SushiOrder{" +
                "seatId=" + seatId +
                ", menuItemIds=" + menuItemIds +
                '}';
    }
}