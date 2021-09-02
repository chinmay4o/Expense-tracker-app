import "./ExpenseFilter.css";
// import { useState } from "react";

export default function ExpenseFilter(props) {
  function expenseFilterHandler(e) {
    props.filterChangeHandler(e.target.value);
    console.log("fffddd" + e.target.value);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter_control">
        <label>Filter By Year </label>
        <select value={props.selectedValue} onChange={expenseFilterHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
}
