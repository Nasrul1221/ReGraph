import Chart from 'react-apexcharts';
import * as chartTemplates from '../../../charts/templates';

export default function Dashboard() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats'));
  let colChart = chartTemplates['column'];

  const seriesData = gameStats.response.games.map((item) =>
    (item.playtime_forever / 60).toFixed(1)
  );
  const categories = gameStats.response.games.map((item) => item.name);

  console.log(seriesData, categories);

  colChart = {
    ...colChart,
    options: {
      ...colChart.options,
      xaxis: {
        ...colChart.options.xaxis,
        categories: categories,
      },
    },
    series: [...colChart.series, { data: seriesData }],
  };

  return (
    <div>
      <Chart
        options={colChart.options}
        series={colChart.series}
        type="bar"
        height={colChart.height}
        width={colChart.width}
      />
    </div>
  );
}
