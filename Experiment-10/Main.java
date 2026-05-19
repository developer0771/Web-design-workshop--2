public class Main {
    public static void main(String[] args) {
        SavingsAccount savingsAccount = new SavingsAccount("SA101", "Rahul Sharma", 25000);
        CurrentAccount currentAccount = new CurrentAccount("CA201", "Anita Verma", 50000);

        System.out.println("Savings Account Details");
        savingsAccount.deposit(5000);
        savingsAccount.displayAccountDetails();
        System.out.println("Interest: Rs. " + savingsAccount.calculateInterest());

        System.out.println();

        System.out.println("Current Account Details");
        currentAccount.deposit(10000);
        currentAccount.displayAccountDetails();
        System.out.println("Interest: Rs. " + currentAccount.calculateInterest());
    }
}
