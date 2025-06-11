import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import Form from "../Form";
import { FormContext } from "../Context";

export default function CreatePage() {
  const [fileName, setFileName] = useState("");
  const [rawData, setRawData] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [labels, setLabels] = useState(null);
  const [dataCount, setDataCount] = useState(0);
  const [lines, setLines] = useState([]);
  const [typeChart, setTypeChart] = useState("");

  const generateChart = () => {
    try {
      if (rawData && typeChart && labels.length > 0) {
        const updatedSeries = rawData.series.map((item, index) => ({
          ...item,
          name: labels[index] || item.name,
        }));

        setChartData({
          ...rawData,
          options: {
            ...rawData.options,
            chart: {
              type: typeChart,
            },
          },
          series: updatedSeries,
        });
      } else if (!rawData) {
        throw new Error("Upload data!");
      } else if (!labels.length) {
        throw new Error("Name labels!");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  useEffect(() => {
    if (rawData && rawData.series && Array.isArray(rawData.series)) {
      setDataCount(rawData.series.length);
      setLabels(new Array(rawData.series.length).fill(undefined));
      setLines([]);
    }
  }, [rawData]);

  const handleFile = (e) => {
    setFileName(e.target.files[0]?.name);
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        if (!json?.options) throw new Error("'options' is required!");
        if (!json?.series) throw new Error("'series' is required!");

        console.log(json);
        setRawData(json);
      } catch (err) {
        alert("Error while reading JSON: " + err.message);
      }

      e.target.value = null;
    };

    reader.readAsText(file);
  };

  return (
    <div className="flex flex-1 justify-between p-10 ">
      <FormContext.Provider
        value={{
          handleFile,
          fileName,
          setLabels,
          dataCount,
          rawData,
          generateChart,
          setDataCount,
          setChartData,
          setRawData,
          lines,
          setLines,
          setTypeChart,
          chartData,
        }}
      >
        <Form />
      </FormContext.Provider>

      <div>
        {chartData && (
          <Chart
            options={chartData.options}
            series={chartData.series}
            height={chartData.height}
            width={chartData.width}
            type={`${chartData.options.chart.type || "line"}`}
          />
        )}
      </div>
    </div>
  );
}
