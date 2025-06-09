import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import Button from "../Button";
import Form from "../Form";

export default function CreatePage() {
  const [fileName, setFileName] = useState("");
  const [rawData, setRawData] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [labels, setLabels] = useState([]);
  const [dataCount, setDataCount] = useState(0);

  const generateChart = () => {
    if (rawData && labels) {
      const updatedData = rawData.series.map((item, index) => ({
        ...item,
        name: labels[index] || item.name,
      }));

      setChartData({
        ...rawData,
        series: updatedData,
      });
    }
  };

  useEffect(() => {
    if (rawData && rawData.series && Array.isArray(rawData.series)) {
      setDataCount(rawData.series.length);
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
      <Form
        handleFile={handleFile}
        fileName={fileName}
        setLabels={setLabels}
        dataCount={dataCount}
        rawData={rawData}
      />

      <div>
        <Button fun={generateChart} label={"Create"} />
        {chartData && (
          <Chart
            options={chartData.options}
            series={chartData.series}
            height={chartData.height}
            width={chartData.width}
          />
        )}
      </div>
    </div>
  );
}
