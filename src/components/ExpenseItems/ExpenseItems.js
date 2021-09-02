import "./expenseitems.css";
import ExpenseDate from "./ExpenseDate";
import Card from   "../Card/Card";

export default function ExpenseItems(props) {
  return (
    <>
      <Card className="expense-item">
      <ExpenseDate date={props.date}/>
        <div className="expense-item_description">
          <h2>{props.title} </h2>
          <div className="expense-item_price"> ${props.amount}</div>
        </div>
      </Card>
    </>
  );
}
