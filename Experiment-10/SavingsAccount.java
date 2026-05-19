public class SavingsAccount extends BankAccount {
    private final double interestRate;

    public SavingsAccount(String accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
        this.interestRate = 4.0;
    }

    @Override
    public double calculateInterest() {
        return getBalance() * interestRate / 100;
    }
}
