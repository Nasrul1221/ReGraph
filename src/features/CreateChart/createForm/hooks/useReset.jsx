import { useAtom } from 'jotai';
import { options } from '@/features/CreateChart/createForm/stores/chartOptions.jotai';

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

    setOptions((prev) => ({
      ...prev,
      stroke: 'straight',
      markers: false,
      toolbar: false,
      width: 5,
    }));
  };
  return fun;
};
