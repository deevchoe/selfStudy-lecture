package scanner.ex;

import java.util.Scanner;

public class ScannerEx4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("몇 단 ? ");
        int n = scanner.nextInt();

        System.out.println("=== " + n + "단 ===");
        for(int i = 1; i <= 9; i++){
            System.out.println(n + " X " + i + " = " + (n * i));
        }
    }
}
