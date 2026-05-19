public class CurrentAccount extends BankAccount {
    private final double interestRate;

    public CurrentAccount(String accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
        this.interestRate = 2.0;
    }

    @Override
    public double calculateInterest() {
        return getBalance() * interestRate / 100;
    }
}
