import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

    const objToNum= props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMax= Math.max(...objToNum);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={Math.random().toString()}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
