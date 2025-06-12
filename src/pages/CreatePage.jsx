import Chart from "react-apexcharts";
import Form from "../features/createForm/components/Form";
import { chartDataAtom } from "../store/dataChartsJotai";
import { useAtom } from "jotai";

export default function CreatePage() {
  const [chartData] = useAtom(chartDataAtom);

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
