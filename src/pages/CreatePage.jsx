import Chart from "react-apexcharts";
import Form from "../features/createForm/components/Form";
import { chartDataAtom } from "../features/createForm/store/dataChartsJotai";
import { useAtom } from "jotai";
import { useEffect } from "react";

export default function CreatePage() {
  const [chartData] = useAtom(chartDataAtom);
  useEffect(() => {
    console.log(chartData);
  }, [chartData]);

  return (
    <div className="flex flex-1 justify-between p-10 ">
      <Form />

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
