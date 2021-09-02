import "./expensefinal.css";
import ExpenseItems from "../ExpenseItems/ExpenseItems.js";
import Card from "../Card/Card.js";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter.js";
import { useState } from "react";
import ExpensesChart from "../ExpenseItems/ExpensesChart.js";

export default function ExpenseFinal(props) {
  
  const [filteredYear, setFilteredYear] = useState("2021");
  function filterChangeHandler(selectedValue) {
    setFilteredYear(selectedValue);

    console.log(filteredYear);
  }

  const dataFiltering = props.expenseArr.filter(ele1 => ele1.date.getFullYear().toString() === filteredYear);
  
  const dataMapping = dataFiltering.map((ele, indexA) => {
    return (
      <ExpenseItems key={indexA} datatitle={ele.title} amount={parseFloat(ele.amount).toFixed(2)} date={ele.date} />
    );
  });

  console.log(dataMapping);

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedValue={filteredYear}
        filterChangeHandler={filterChangeHandler}
      />
      <ExpensesChart dataFiltering={dataFiltering}/>
      {/* {dataMapping.length === 0 ? <h2>No expenses found</h2> : dataMapping} */}
      {dataMapping.length === 0 && <h2>No expenses found</h2>}
      {dataMapping.length > 0 &&  dataMapping}
    </Card>
  );
}