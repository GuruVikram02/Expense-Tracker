import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NeewExpense from "./components/NewExpense/NeewExpense";
// import Chart from './components/Chart/Chart';
const Dummyexpenses = [
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2019, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e5",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2020, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(Dummyexpenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      const FilteredValue = [expense, ...prevExpense];
      return FilteredValue;
    });
  };

  // console.log(filterValue);
  return (
    <div>

      <NeewExpense onAddExpense={addExpenseHandler} />
      <Expenses  items={expenses}/>
      {/* <button onClick={filterDataHandler}></button> */}
    </div>
  );
}

export default App;
