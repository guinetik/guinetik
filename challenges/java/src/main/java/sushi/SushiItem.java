package sushi;
public class SushiItem {
    private int seatId;
    private String menuItemId;

    public SushiItem(int seatId, String menuItemId){
        this.seatId = seatId;
        this.menuItemId = menuItemId;
    }

    public int getSeatId() {
        return this.seatId;
    }

    public String getMenuItemId(){
        return this.menuItemId;
    }

    @Override
    public String toString() {
        return "{seatId: " + seatId + ", menuItemId: " + menuItemId + "}" + "\n" + this.getClass().getName();
    }
}