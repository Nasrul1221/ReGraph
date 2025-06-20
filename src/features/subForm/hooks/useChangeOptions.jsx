import { useEffect } from 'react';
import { useAtom } from 'jotai';

import { rawDataAtom } from '../../../stores/dataCharts.jotai';
import { options } from '../../../stores/chartOptions.jotai';

export function useChangeOptions() {
  const [, setRawData] = useAtom(rawDataAtom);
  const [chartOptions] = useAtom(options);
  useEffect(() => {
    setRawData((prev) => {
      const updated = { ...prev.options };
      updated.chart = {
        ...updated.chart,
        toolbar: {
          show: chartOptions.toolbar,
        },
      };

      if (chartOptions.stroke) {
        updated.stroke = {
          ...updated.stroke,
          curve: 'stepline',
        };
      }

      if (chartOptions.markers) {
        updated.markers = {
          size: 7,
        };
      }

      if (chartOptions.width != 5) {
        updated.stroke = {
          ...updated.stroke,
          width: chartOptions.width,
        };
      }

      return {
        ...prev,
        options: updated,
      };
    });
  }, [chartOptions]);
}
