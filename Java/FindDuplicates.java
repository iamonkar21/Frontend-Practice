
public class FindDuplicates {

    public static void main(String[] args) {
        int[] arr = {1, 5, 2, 3, 5, 1, 7, 9, 2};

        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    System.out.println(arr[i]);
                }
            }
        }
    }
}
