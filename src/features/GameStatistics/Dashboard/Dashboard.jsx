import Chart from 'react-apexcharts';
import * as chartTemplates from '../../../charts/templates';

// Components
import Card from '@/components/Card';

export default function Dashboard() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats'));
  let colChart = chartTemplates['column'];
  let pieChart = chartTemplates['pie'];

  // let count = 0;
  // gameStats.playerstats.achievements.forEach((item) => {
  //   if (item.achieved) count++;
  // });

  // console.log(count);

  const seriesData = gameStats.response.games.map((item) =>
    (item.playtime_forever / 60).toFixed(1)
  );
  const categories = gameStats.response.games.map((item) => item.name);

  console.log(seriesData, categories);

  colChart = {
    ...colChart,
    options: {
      ...colChart.options,
      colors: ['#CB3CFF', '#ffff'],
      xaxis: {
        categories: categories,
      },
    },
    series: [{ data: seriesData }],
  };

  return (
    <div>
      <Card>
        <Chart
          options={colChart.options}
          series={colChart.series}
          type="bar"
          height={colChart.height}
          width={colChart.width}
        />

        {/* <Chart /> */}
      </Card>
    </div>
  );
}
