// React && State
import { useAtom } from 'jotai';
import { chartDataAtom } from '@/stores/dataCharts.jotai';
import { chartsStorageAtom } from '@/stores/chartsStorage.jotai';

export function useAddToStorage() {
  const [chartData] = useAtom(chartDataAtom);
  const [, setChartStorage] = useAtom(chartsStorageAtom);

  const fun = () => {
    setChartStorage((prev) => {
      const updated = [...prev, chartData];

      return updated;
    });
  };

  return fun;
}
