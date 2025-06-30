import { useAtom } from 'jotai';
import { userSteamDataJotai } from '../../stores/userSteamData.jotai';

import { useState, useEffect } from 'react';

import * as chartTemplates from '../../../../charts/templates';

export default function useGetData() {
  const recentgames = JSON.parse(localStorage.getItem('recentgames'));
  const achievements = JSON.parse(localStorage.getItem('achievements'));
  const gameStats = JSON.parse(localStorage.getItem('gameStats'));
  const ownedGames = JSON.parse(localStorage.getItem('ownedGames'));
  const user = JSON.parse(localStorage.getItem('user'));

  // userData
  const [userSteamData] = useAtom(userSteamDataJotai);

  // States
  const [isAch, setIsAch] = useState(false);
  const [pieChart, setPieChart] = useState(chartTemplates['pie']);

  // Online || Offline
  const online = (
    <p className="bg-[#05C168] bg-opacity-[0.3] text-center rounded-[2px] text-[#05C168] mb-2 border border-[#05C168] border-opacity-[0.2]">
      Online
    </p>
  );
  const offline = (
    <p className="bg-[#FF5A65] bg-opacity-[0.3] text-center rounded-[2px] text-[#FF5A65] mb-2 border border-[#FF5A65] border-opacity-[0.2]">
      Offline
    </p>
  );

  // All used data
  const dateCreated = new Date(user.response.players[0].timecreated * 1000);
  const totalKills = gameStats?.playerstats?.stats?.find(
    (item) => item.name === obj.kills[userSteamData.appID]
  )?.value;
  const totalDeaths = gameStats?.playerstats?.stats?.find(
    (item) => item.name === obj.deaths[userSteamData.appID]
  )?.value;

  const totalTime =
    ownedGames.response.games.find((item) => item.appid === Number(userSteamData.appID))
      ?.playtime_forever / 60;

  const game = ownedGames.response.games.find((item) => item.appid === Number(userSteamData.appID));

  // Pie chart
  useEffect(() => {
    if (achievements.playerstats.achievements) {
      setIsAch(true);
      let completedAch = achievements.playerstats.achievements.filter((a) => a.achieved).length;

      const totalAch = achievements.playerstats.achievements.length;
      const uncompletedAch = totalAch - completedAch;

      setPieChart((prev) => ({
        ...prev,
        options: {
          ...prev.options,
          labels: ['Completed', 'Uncompleted'],
        },
        series: [completedAch, uncompletedAch],
      }));
    }
  }, []);

  // Column chart
  let colChart = chartTemplates['column'];
  const seriesData = recentgames.response.games.map((item) =>
    (item.playtime_forever / 60).toFixed(1)
  );
  const categories = recentgames.response.games.map((item) => item.name);

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

  return {
    user,
    dateCreated,
    colChart,
    totalKills,
    totalDeaths,
    totalTime,
    pieChart,
    game,
    isAch,
    online,
    offline,
  };
}

const obj = {
  kills: {
    730: 'total_kills',
    251570: 'ZombiesKilled',
  },
  deaths: {
    730: 'total_deaths',
    251570: 'Deaths',
  },
};
