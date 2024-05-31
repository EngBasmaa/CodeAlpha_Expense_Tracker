const expenseForm = document.getElementById("add-expense-form");
const expenseTable = document
  .getElementById("expenses-table")
  .getElementsByTagName("tbody")[0];

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const expenseName = document.getElementById("expense-name").value;
  const expenseAmount = document.getElementById("expense-amount").value;

  // Add expense object
  const expense = {
    name: expenseName,
    amount: expenseAmount,
  };

  // Save expense to local storage
  saveExpenseToLocalStorage(expense);

  // ... (optional logic for saving data)

  // Add expense to table
  addExpenseToTable(expense);

  // Clear form
  expenseForm.reset();
});

// Function to add expense to table
function addExpenseToTable(expense) {
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
    <td>${expense.name}</td>
    <td>${expense.amount}</td>
    <td><button data-name="${expense.name}" class="dele">Delete</button></td>
  `;

  // Add event listener for delete button
  tableRow.querySelector("button").addEventListener("click", function () {
    const expenseName = this.dataset.name;
    removeExpense(expenseName);
    expenseTable.removeChild(this.parentElement.parentElement); // Remove the entire row
  });

  expenseTable.appendChild(tableRow);
}

// Function to remove expense (optional, for data management)
function removeExpense(expenseName) {
  // Implement logic to remove expense data from storage (if applicable)
  console.log(`Expense "${expenseName}" removed (data removal pending)`);
}
