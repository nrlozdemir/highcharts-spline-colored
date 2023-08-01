import "./styles.css";

import { default as ChartComponent } from "highcharts";
import { default as LineChart } from "highcharts-react-official";
import json from "./data.json";

console.log(
  json.labels.length,
  json.data[0].data.length,
  json.data[1].data.length
);

const renderChart = () => {
  return (
    <LineChart
      options={{
        title: {
          text: ""
        },
        chart: {
          width: 1046,
          height: 300,
          spacingLeft: 0,
          alignTicks: false,
          renderTo: "container",
          type: "spline",
          style: {
            fontColor: "#000",
            fontSize: "1em",
            fontFamily: "Roboto"
          },
          animation: false
        },
        legend: {
          display: false
        },
        xAxis: {
          categories: [...json.labels],
          startOnTick: true,
          showFirstLabel: true,
          endOnTick: true,
          showLastLabel: true,
          tickPosition: "inside",
          gridLineColor: "#e6e6e6",
          gridLineWidth: 1,
          labels: {
            y: 20,
            style: {
              fontSize: "10px"
            }
          },
          min: 0,
          title: {
            text: null
          },
          maxPadding: 0,
          tickWidth: 1
        },
        yAxis: {
          tickPosition: "inside",
          tickInterval: 2,
          minTickInterval: 1,
          min: 20,
          title: {
            text: null
          },
          floor: 0,
          tickWidth: 1,
          labels: {
            style: {
              fontSize: "10px"
            }
          },
          gridLineWidth: 1,
          tickmarkPlacement: "between"
        },
        tooltip: {
          display: false
        },
        credits: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
        plotOptions: {
          series: {
            states: {
              inactive: {
                opacity: 1
              }
            },
            zones: [
              {
                value: 27,
                color: "green"
              },
              {
                value: 100,
                color: "red"
              },
              {
                color: "black"
              }
            ]
          }
        },
        series: [
          ...json.data.map((ds, i) => ({
            visible: true,
            showInLegend: false,
            dataLabels: { enabled: false },
            marker: {
              enabled: false,
              radius: 0
            },
            name: ds.label,
            data: [...ds.data],
            states: {
              hover: {
                enabled: false,
                marker: {
                  enabled: false
                }
              }
            }
          }))
        ]
      }}
      highcharts={ChartComponent}
    />
  );
};

export default function App() {
  return <div className="App">{renderChart()}</div>;
}
