package scanner.ex;

import java.util.Scanner;

public class ScannerEx5 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("첫 번째 숫자를 입력하세요 : ");
        int num1 = scanner.nextInt();

        System.out.print("두 번째 숫자를 입력하세요 : ");
        int num2 = scanner.nextInt();

        // num1이 num2보다 큰 경우
        if(num1 > num2){
            int temp = num1;
            num1 = num2;
            num2 = temp;
        }

        System.out.print("두 숫자 사이의 모든 정수 : ");
        while(num1 <= num2) {
            System.out.print(num1);
            if(num1 != num2) {
                System.out.print(", ");
            }
            num1++;
        }

//        for(int i = num1; i <= num2; i++){
//            System.out.println(i);
//            if(num1 != num2) {
//                System.out.print(", ");
//            }
//        }
    }
}
