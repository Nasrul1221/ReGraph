import Chart from 'react-apexcharts';
import * as chartTemplates from '../../../charts/templates';

// Components
import Card from '@/components/Card';
import { options } from '@/pages/homePageData/data';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats'));
  const achievements = JSON.parse(localStorage.getItem('achievements'));
  const [isAch, setIsAch] = useState(false);
  const [pieChart, setPieChart] = useState(chartTemplates['pie']);

  let colChart = chartTemplates['column'];

  // Column chart
  useEffect(() => {
    if (achievements.playerstats.achievements) {
      setIsAch(true);
      let completedAch = achievements.playerstats.achievements.filter((a) => a.achieved).length;

      const totalAch = achievements.playerstats.achievements.length;
      const uncompletedAch = totalAch - completedAch;
      console.log(completedAch);

      setPieChart((prev) => ({
        ...prev,
        options: {
          ...prev.options,
          labels: ['Achieved', 'Not achieved'],
        },
        series: [completedAch, uncompletedAch],
      }));
    }
  }, []);

  const seriesData = gameStats.response.games.map((item) =>
    (item.playtime_forever / 60).toFixed(1)
  );
  const categories = gameStats.response.games.map((item) => item.name);

  console.log(seriesData, categories);

  colChart = {
    ...colChart,
    options: {
      ...colChart.options,
      chart: {
        ...colChart.options.chart,
        toolbar: {
          show: false,
        },
      },
      colors: ['#CB3CFF', '#ffff'],
      xaxis: {
        ...colChart.options.xaxis,
        categories: categories,
      },
    },
    series: [{ data: seriesData }],
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <section className="grid grid-rows-2 gap-4">
        <Card>
          <Chart
            options={colChart.options}
            series={colChart.series}
            type="bar"
            height="250"
            width="500"
          />
        </Card>
        <Card>
          <Chart
            options={colChart.options}
            series={colChart.series}
            type="bar"
            height="250"
            width="500"
          />
        </Card>
      </section>

      <section>
        <Card>
          {isAch ? (
            <Chart
              options={pieChart.options}
              series={pieChart.series}
              type="pie"
              height="250"
              width="500"
            />
          ) : (
            <div>This game does not have any achievements</div>
          )}
        </Card>
      </section>
    </div>
  );
}
