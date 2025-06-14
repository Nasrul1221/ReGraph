// React && State
import { useEffect, useState } from "react";
import { useAtom } from "jotai";

// Components
import Select from "./Select";
import AddLabels from "./AddLabels";
import UploadFile from "./UploadFile";

// Shadcn UI components
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

// Jotai stores
import { userDataJotai } from "../../../stores/dataCharts.jotai";
import { typeChartAtom } from "../../../stores/typeCharts.jotai";
import { rawDataAtom, chartDataAtom } from "../../../stores/dataCharts.jotai";

// Charts
import * as chartTemplates from "../../../charts/templates";

import { chartsTypes } from "../../../charts/chartsTypes";
import useGetData from "../hooks/useGetData";

function Form() {
  const [count, setCount] = useState(0);
  const [labels, setLabels] = useState(null);
  const [dataCount, setDataCount] = useState(0);
  const [lines, setLines] = useState([]);
  const [typeChart, setTypeChart] = useAtom(typeChartAtom);
  const { handleFile, fileName } = useGetData(typeChart);
  const [rawData, setRawData] = useAtom(rawDataAtom);
  const [, setChartData] = useAtom(chartDataAtom);
  const [userData] = useAtom(userDataJotai);

  const generateChart = () => {
    try {
      if (rawData) {
        console.log(rawData);
        if (userData) {
          const updatedSeries = userData.series.map((item, index) => ({
            ...item,
            name: labels[index] || item.name,
          }));

          const updatedXaxis = [...userData.options.xaxis.categories];

          setChartData({
            ...rawData,
            options: {
              ...rawData.options,
              xaxis: {
                ...rawData.options.xaxis,
                categories: updatedXaxis,
              },
            },
            series: updatedSeries,
          });

          return;
        }

        setChartData(rawData);
      } else if (!typeChart) {
        throw new Error("Choose at least a type!");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  useEffect(() => {
    if (userData && userData.series && Array.isArray(userData.series)) {
      setDataCount(userData.series.length);
      setLabels(new Array(userData.series.length).fill(undefined));
      setLines([]);
    }
  }, [userData]);

  useEffect(() => setCount(dataCount), [dataCount]);
  useEffect(() => {
    if (typeChart === "line") setRawData(chartTemplates["line"]);
    else if (typeChart === "area") setRawData(chartTemplates["area"]);
    else if (typeChart === "bar") setRawData(chartTemplates["bar"]);
  }, [typeChart]);

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
    setTypeChart("");
  };

  return (
    <div className="border rounded-xl shadow-lg p-5 w-[300px] box-border flex flex-col gap-y-4">
      <Button onClick={generateChart}>Create</Button>
      <UploadFile fun={handleFile} fileName={fileName} label={"Upload file"} />

      <div>
        <AddLabels fun={addLine} count={count} />
        <Select object={chartsTypes} setValue={setTypeChart} />
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
