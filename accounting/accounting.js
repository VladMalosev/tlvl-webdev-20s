const MAX_EXPENSES = 150;
let currentExpenses = 0;

function addExpense(description, price) {
  if (price < 0) {
    return false;
  } else {

  }

  if (currentExpenses + prace <= MAX_EXPENSES) {
    currentExpenses += price;
    return true;
  } else {
    return false;
  }
}

console.log('currentExpenses', currentExpenses);
console.log('add Milk',
            addExpense('Milk', 1.00));
console.log('add Playstation 4',
            addExpense('Playstation 4', 399));
console.log('add Videogame',
            addExpense('Videogame', 69.99));
console.log('try to hack',
            addExpense('Hacker', -45.26));
console.log('currentExpenses', currentExpenses);
