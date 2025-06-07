import Chart from "react-apexcharts";
import { useState } from "react";

export default function CreatePage() {
  const [fileName, setFileName] = useState("");
  const [data, setData] = useState(null);

  const handleFile = (e) => {
    setFileName(e.target.files[0]?.name);
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        setData(json);
        console.log(json);
      } catch (err) {
        alert("Error while reading JSON: " + err.message);
      }
    };

    reader.readAsText(file);
  };

  return (
    <div className="flex flex-1 justify-between p-10 ">
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
        {data && (
          <Chart
            options={data.options}
            series={data.series}
            height={data.height}
            width={data.width}
          />
        )}
      </div>
    </div>
  );
}
