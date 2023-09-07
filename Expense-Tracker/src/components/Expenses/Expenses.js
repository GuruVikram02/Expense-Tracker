
import Card from "../Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
export default function Expenses(props) {
  const [filterData, setFilterData] = useState(2022);
  const filterDataHandler = (bobo) => {
    setFilterData(bobo);
  };

  const FilteredData = props.items.filter((data) => {
    return data.date.getFullYear().toString() === filterData;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterData}
          filterData={filterDataHandler}
        />
        <ExpensesChart expenses={FilteredData}/>
        <ExpensesList items={FilteredData}/>
      </Card>
    </div>
  );
}
