import ChartBar from "./ChartBar.js";
import "./chart.css";

function Chart(props) {
    const valueArr = props.ChartData.map((ele) => ele.value);
    const totalMax = Math.max(...valueArr);
    console.log(valueArr);
    console.log(totalMax);
  return (
    <div className="chart">
      {props.ChartData.map((ele, indexA) => (
        <ChartBar
          key={indexA}
          value={ele.value}
          label={ele.label}
          maxValue={totalMax}
        />
      ))}
    </div>
  );
}

export default Chart;
