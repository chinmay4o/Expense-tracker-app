import Chart from "../Chart/Chart.js";

export default function ExpensesChart(props) {
  const ChartData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (var i of props.dataFiltering) {
    const ExpenseMonth = i.date.getMonth(); //starting at 0 for jan and so on...
    ChartData[ExpenseMonth].value = +ChartData[ExpenseMonth].value + i.amount;
  }

  console.log(ChartData);


  return (
    <>
      <Chart ChartData={ChartData} />
    </>
  );
}
