import { useAtom } from 'jotai';
import { options } from '@/stores/chartOptions.jotai';

export const useReset = ({
  setLabels,
  setChartData,
  setRawData,
  setLines,
  setDataCount,
  setTypeChart,
}) => {
  const [, setOptions] = useAtom(options);

  const fun = () => {
    setLabels(null);
    setChartData(null);
    setRawData(null);
    setLines([]);
    setDataCount(0);
    setTypeChart('');

    setOptions((prev) => {
      const updated = Object.entries(prev).map(([key, value]) => [key, false]);
      const newObj = Object.fromEntries(updated);

      return newObj;
    });
  };
  return fun;
};
