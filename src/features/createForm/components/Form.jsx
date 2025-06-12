import { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import Select from "./Select";
import { chartsTypes } from "../../../charts/chartsTypes";
import UploadFile from "./UploadFile";
import { rawDataAtom, chartDataAtom } from "../store/dataChartsJotai";
import { useAtom } from "jotai";
import AddLabels from "./AddLabels";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import useGetData from "../hooks/useGetData";

function Form() {
  const [count, setCount] = useState(0);
  const [typeChart, setTypeChart] = useState("");
  const [labels, setLabels] = useState(null);
  const [dataCount, setDataCount] = useState(0);
  const [lines, setLines] = useState([]);
  const { handleFile, fileName } = useGetData();
  const [rawData, setRawData] = useAtom(rawDataAtom);
  const [, setChartData] = useAtom(chartDataAtom);

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

  useEffect(() => setCount(dataCount), [dataCount]);

  const handleApply = (index) => {
    const value = lines[index];
    if (value.trim() === "") return;

    setLabels((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });

    if (dataCount > 0) setDataCount((prev) => prev - 1);

    const updated = [...lines];
    updated[index] = "";
    setLines(updated);
  };

  const handleInputChange = (index, value) => {
    const updated = [...lines];
    updated[index] = value;
    setLines(updated);
  };

  const addLine = () => {
    try {
      console.log(lines.length, dataCount);
      if (lines.length < dataCount) {
        setLines((prev) => [...prev, ""]);
        setCount((prev) => prev - 1);
      } else if (!rawData) throw new Error("Upload data");
      else if (lines.length >= dataCount)
        throw new Error("The max number of names is reached");
    } catch (err) {
      alert(err.message);
    }
  };

  const reset = () => {
    setLabels(null);
    setChartData(null);
    setRawData(null);
    setLines([]);
    setDataCount(0);
  };

  return (
    <div className="border rounded-xl shadow-lg p-5 w-[300px] box-border flex flex-col gap-y-4">
      <Button onClick={generateChart}>Create</Button>
      <UploadFile fun={handleFile} fileName={fileName} label={"Upload file"} />

      <div>
        <AddLabels fun={addLine} count={count} />
        <Select object={chartsTypes} setTypeChart={setTypeChart} />
        <div className="flex flex-col gap-y-3 mt-5">
          {lines.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <Label
                htmlFor={`text-${index}`}
                className="text-black text-[18px]"
              >
                Label
              </Label>
              <Input
                id={`text-${index}`}
                onChange={(e) => handleInputChange(index, e.target.value)}
                value={lines[index]}
                placeholder="write here"
                className="w-[140px] outline-none border-b border-gray-300"
              />
              <Button onClick={() => handleApply(index)}>Apply</Button>
            </div>
          ))}
          <Button variant={"destructive"} onClick={reset}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Form;
