import Chart from 'react-apexcharts';
import Form from '../features/createForm/components/Form';
import { chartDataAtom } from '../stores/dataCharts.jotai';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { typeChartAtom } from '../stores/typeCharts.jotai';
import SubForm from '../features/subForm/components/SubForm';

export default function CreatePage() {
  const [chartData] = useAtom(chartDataAtom);
  const [typeChart] = useAtom(typeChartAtom);

  useEffect(() => {
    console.log(chartData);
  }, [chartData]);

  return (
    <div className="flex flex-1 justify-between p-10 ">
      <Form />

      <div className="flex flex-col">
        {(typeChart === 'line' && <SubForm />) || (typeChart === 'area' && <SubForm />)}
        {chartData && (
          <Chart
            options={chartData.options}
            series={chartData.series}
            height={chartData.height}
            width={chartData.width}
            type={`${chartData.options.chart.type || 'line'}`}
          />
        )}
      </div>
    </div>
  );
}
