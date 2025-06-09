import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import Button from "./Button";

export default function Form({ handleFile, fileName, setLabels, dataCount }) {
  const [lines, setLines] = useState([]);

  const handleApply = (index) => {
    const value = lines[index];
    if (value.trim() === "") return;

    setLabels((prev) => [...prev, value]);

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
      } else throw new Error("The max number of names is reached");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div>
      <div>
        <label
          htmlFor="fileUpload"
          className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Вибрати файл
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
        <IoIosAddCircle className="text-3xl mt-20" onClick={addLine} />
        <div>
          {lines.map((item, index) => (
            <div key={index}>
              <label htmlFor={`text-${index}`}>Text</label>
              <input
                id={`text-${index}`}
                onChange={(e) => handleInputChange(index, e.target.value)}
                value={lines[index]}
              />
              <Button fun={() => handleApply(index)} label={"Apply"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
