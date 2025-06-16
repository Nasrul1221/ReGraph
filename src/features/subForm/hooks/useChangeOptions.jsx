import { useEffect } from 'react';
import { useAtom } from 'jotai';

import { rawDataAtom } from '../../../stores/dataCharts.jotai';
import { options } from '../../../stores/chartOptions.jotai';

export function useChangeOptions() {
  const [, setRawData] = useAtom(rawDataAtom);
  const [chartOptions] = useAtom(options);
  useEffect(() => {
    if (chartOptions.stroke === true) {
      setRawData((prev) => ({
        ...prev,
        options: {
          ...prev.options,
          stroke: {
            curve: 'smooth',
          },
        },
      }));
    }

    if (chartOptions.markers === true) {
      setRawData((prev) => ({
        ...prev,
        options: {
          ...prev.options,
          markers: {
            size: 7,
          },
        },
      }));
    }
  }, [chartOptions.stroke, chartOptions.markers]);
}
