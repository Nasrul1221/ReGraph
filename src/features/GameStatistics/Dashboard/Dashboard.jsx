import Chart from 'react-apexcharts';
import * as chartTemplates from '../../../charts/templates';

// Components
import Card from '@/components/Card';
import { options } from '@/pages/homePageData/data';

export default function Dashboard() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats'));
  const achievements = JSON.parse(localStorage.getItem('achievements'));

  let colChart = chartTemplates['column'];
  let pieChart = chartTemplates['pie'];

  let completedAch = 0;
  if (achievements.playerstats.achievements) {
    achievements.playerstats.achievements.forEach((item) => {
      if (item.achieved) completedAch++;
    });
  }

  const totalAch = achievements.playerstats.achievements.length;
  const uncompletedAch = totalAch - completedAch;
  console.log(completedAch);

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

  pieChart = {
    ...pieChart,
    options: {
      ...pieChart.options,
      labels: ['Achieved', 'Not achieved'],
    },
    series: [completedAch, uncompletedAch],
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

        <Chart
          options={pieChart.options}
          series={pieChart.series}
          type="pie"
          height={pieChart.height}
          width={pieChart.width}
        />
      </Card>
    </div>
  );
}
