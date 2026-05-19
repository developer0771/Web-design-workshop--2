# Experiment 10

## Title

Java OOP Concepts Implementation

## Problem Statement

Create Java classes demonstrating encapsulation, inheritance, and abstraction through a Bank Management System.

## Concepts Used

- Encapsulation: private data members with getter and setter methods
- Inheritance: `SavingsAccount` and `CurrentAccount` extend `BankAccount`
- Abstraction: `BankAccount` defines the abstract method `calculateInterest()`

## Files

- `BankAccount.java`
- `SavingsAccount.java`
- `CurrentAccount.java`
- `Main.java`

## How to Run

```bash
javac *.java
java Main
```

## Expected Output

```text
Savings Account Details
Deposited: Rs. 5000.0
Account Number: SA101
Account Holder Name: Rahul Sharma
Balance: Rs. 30000.0
Interest: Rs. 1200.0

Current Account Details
Deposited: Rs. 10000.0
Account Number: CA201
Account Holder Name: Anita Verma
Balance: Rs. 60000.0
Interest: Rs. 1200.0
```
