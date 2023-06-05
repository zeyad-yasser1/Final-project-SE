// Sample transactions for credit card
const creditCardTransactions = [
    { description: 'Birthday Dinner', amount: 150.0 },
    { description: 'Arcade Games', amount: 80.0 },
    { description: 'Shopping', amount: 250.0 },
    { description: 'Grocery', amount: 100.0 },
  ];
  
  // Sample transactions for bank account
  const bankAccountTransactions = [
    { description: 'Salary Deposit', amount: 2000.0 },
    { description: 'Rent Payment', amount: 800.0 },
    { description: 'Dining Out', amount: 75.0 },
  ];
  
// Function to generate transaction list HTML
function generateTransactionList(transactions, title) {
    const container = document.createElement('div');
    container.className = 'transaction-list';
  
    const heading = document.createElement('h3');
    heading.textContent = title;
    container.appendChild(heading);
  
    const list = document.createElement('ul');
    transactions.forEach((transaction) => {
      const item = document.createElement('li');
      item.textContent = `${transaction.description}: $${transaction.amount.toFixed(2)}`;
      list.appendChild(item);
    });
  
    container.appendChild(list);
    return container;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // Retrieve transaction container element
    const transactionContainer = document.querySelector('.transaction-container');
  
    // Generate and append credit card transactions
    const creditCardList = generateTransactionList(creditCardTransactions, 'Credit Card Transactions');
    transactionContainer.appendChild(creditCardList);
  
    // Generate and append bank account transactions
    const bankAccountList = generateTransactionList(bankAccountTransactions, 'Bank Account Transactions');
    transactionContainer.appendChild(bankAccountList);
  });
  