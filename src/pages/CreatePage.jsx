// ApexCharts
import Chart from 'react-apexcharts';

// Reusable components
import Card from '@/components/Card';

// Features (Components)
import Form from '../features/createForm/components/Form';
import SubForm from '../features/subForm/components/SubForm';

// React && State
import { useAtom } from 'jotai';
import { useEffect } from 'react';

// Hooks
import { useAddToStorage } from '../hooks/useAddToStorage';

// Stores
import { typeChartAtom } from '../stores/typeCharts.jotai';
import { chartDataAtom } from '../stores/dataCharts.jotai';

//Shadcn UI
import { Button } from '../components/ui/button';

export default function CreatePage() {
  const [chartData] = useAtom(chartDataAtom);
  const [typeChart] = useAtom(typeChartAtom);
  const handleClick = useAddToStorage();

  useEffect(() => {
    console.log(chartData);
  }, [chartData]);

  return (
    <div className="flex flex-1 gap-3 p-5 ">
      <Form />

      <div className="flex flex-col gap-y-3">
        {typeChart && <SubForm />}
        {chartData && (
          <Card>
            <Chart
              options={chartData.options}
              series={chartData.series}
              height={chartData.height}
              width={chartData.width}
              type={`${chartData.options.chart.type || 'line'}`}
            />
            <Button onClick={handleClick}>Save</Button>
          </Card>
        )}
      </div>
    </div>
  );
}
