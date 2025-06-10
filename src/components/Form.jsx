import { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import Button from "./Button";

function Form({
  handleFile,
  fileName,
  setLabels,
  dataCount,
  rawData,
  generateChart,
  setDataCount,
}) {
  const [lines, setLines] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => setCount(dataCount), [dataCount]);

  const handleApply = (index) => {
    const value = lines[index];
    if (value.trim() === "") return;

    setLabels((prev) => [...prev, value]);
    setDataCount((prev) => prev - 1);

    const updated = [...lines];
    updated.splice(index, 1);
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
  return (
    <div className="border rounded-xl shadow-lg p-5 w-[300px] box-border flex flex-col gap-y-4">
      <Button fun={generateChart} label={"Create"} size={"xl"} />
      <div>
        <label
          htmlFor="fileUpload"
          className="cursor-pointer px-4 py-2 bg-primary text-white rounded hover:bg-white hover:text-grayText transition border border-primary mr-2"
        >
          Upload file
        </label>

        <input
          id="fileUpload"
          type="file"
          className="hidden"
          onChange={handleFile}
        />

        <span className="text-sm text-gray-700">{fileName}</span>
      </div>

      <div>
        <div className="flex gap-3 items-center">
          <h1 className="order-2 text-secondary font-bold">
            Add label: {count}
          </h1>
          <div className="bg-white rounded-full group hover:bg-primary transition-all duration-300">
            <IoIosAddCircle
              className="text-3xl order-1 text-secondary group-hover:text-white transition-all duration-300 cursor-pointer"
              onClick={addLine}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-3 mt-5">
          {lines.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <label
                htmlFor={`text-${index}`}
                className="text-grayText text-[18px]"
              >
                Text
              </label>
              <input
                id={`text-${index}`}
                onChange={(e) => handleInputChange(index, e.target.value)}
                value={lines[index]}
                placeholder="write here"
                className="w-[140px] outline-none border-b border-gray-300"
              />
              <Button fun={() => handleApply(index)} label={"Apply"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Form;
