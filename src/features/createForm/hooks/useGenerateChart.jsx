import { useCallback } from 'react';

export const useGenerateChart = ({ rawData, userData, labels, setChartData, typeChart }) => {
  const generate = useCallback(() => {
    try {
      if (rawData) {
        if (userData) {
          const updatedSeries = userData.series.map((item, index) => ({
            ...item,
            name: labels[index] || item.name,
          }));

          const updatedXaxis = [...userData.options.xaxis.categories];

          setChartData({
            ...rawData,
            options: {
              ...rawData.options,
              xaxis: {
                ...rawData.options.xaxis,
                categories: updatedXaxis,
              },
            },
            series: updatedSeries,
          });

          return;
        }

        setChartData(rawData);
      } else if (!typeChart) {
        throw new Error('Choose at least a type!');
      }
    } catch (err) {
      alert('Error: ' + err.message);
    }
  }, [rawData, userData, labels, setChartData, typeChart]);

  return generate;
};
