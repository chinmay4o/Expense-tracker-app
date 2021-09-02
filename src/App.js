import "./App.css";
import ExpenseFinal from "./components/ExpenseFinal/ExpenseFinal.js";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm.js";
import { useState } from "react";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Shoes",
      amount: 45,
      date: new Date(2023, 1, 1),
    },
    {
      id: "e6",
      title: "Sheets",
      amount: 290,
      date: new Date(2021, 3, 10),
    },
    {
      id: "e7",
      title: "Books",
      amount: 634,
      date: new Date(2021, 4, 5),
    },
    {
      id: "e8",
      title: "Sheets",
      amount: 745,
      date: new Date(2022, 5, 15),
    },
    {
      id: "e9",
      title: "Sheets",
      amount: 845,
      date: new Date(2021, 8, 12),
    },
  ];

  const [expenseArr, setExpenseArr] = useState([...expenses]);
  function newExpenseData(expense) {
    const expensesUpdater = { ...expense, id: Math.random().toString() };

    console.log(expensesUpdater);

    return setExpenseArr((prevArr) => {
      return [expensesUpdater, ...prevArr];
    });
  }
  return (
    <div className="App">
      <ExpenseForm onSaveExpenseData={newExpenseData} />
      <ExpenseFinal
        newEntry={newExpenseData}
        expenseArr={expenseArr}
        setExpenseArr={setExpenseArr}
      />
    </div>
  );
}

export default App;
