package sushi;
import java.util.ArrayList;
import java.util.Arrays;

public class Runner {

    public static void main(String[] args) {
        SushiOrderManager manager = new SushiOrderManager();

        ArrayList<SushiOrder> request = new ArrayList<>(
                Arrays.asList(
                        new SushiOrder(2,
                                new ArrayList<>(Arrays.asList(
                                        new String[] {"dragon"}
                                ))
                        ),
                        new SushiOrder(1,
                                new ArrayList<>(Arrays.asList(
                                        new String[] {"avocado", "dynamite"}
                                ))
                        )
                )
        );
        manager.addOrder(request);
        System.out.println(manager.nextItem());

        request = new ArrayList<>(
                Arrays.asList(
                        new SushiOrder(1,
                                new ArrayList<>(Arrays.asList(
                                        new String[] {"mushroom"}
                                ))
                        )
                )
        );
        manager.addOrder(request);

        for (int i = 0; i < 4; i++) {
            System.out.println(manager.nextItem());
        }

    }




}