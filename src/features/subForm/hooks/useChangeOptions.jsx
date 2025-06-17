import { useEffect } from 'react';
import { useAtom } from 'jotai';

import { rawDataAtom } from '../../../stores/dataCharts.jotai';
import { options } from '../../../stores/chartOptions.jotai';

export function useChangeOptions() {
  const [, setRawData] = useAtom(rawDataAtom);
  const [chartOptions] = useAtom(options);
  useEffect(() => {
    if (chartOptions.toolbar === true) {
      setRawData((prev) => ({
        ...prev,
        options: {
          ...prev.options,
          chart: {
            ...prev.options.chart,
            toolbar: {
              show: true,
            },
          },
        },
      }));
    } else {
      setRawData((prev) => ({
        ...prev,
        options: {
          ...prev.options,
          chart: {
            ...prev.options.chart,
            toolbar: {
              show: false,
            },
          },
        },
      }));
    }

    if (chartOptions.stroke === true) {
      setRawData((prev) => ({
        ...prev,
        options: {
          ...prev.options,
          stroke: {
            curve: 'stepline',
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
  }, [chartOptions.stroke, chartOptions.markers, chartOptions.toolbar]);
}
