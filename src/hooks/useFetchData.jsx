// JOTAI
import { useAtom } from 'jotai';
import { userSteamDataJotai } from '@/features/GameStatistics/stores/userSteamData.jotai';

// React && State
import { useState } from 'react';

export default function useFetchData() {
  const [userSteamData] = useAtom(userSteamDataJotai);
  const [load, setLoad] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const fetchData = async () => {
    try {
      setLoad(true);
      const [recentGamesRes, achRes, gameRes, ownedRes, userRes] = await Promise.all([
        fetch(`http://localhost:3000/steam/recentgames?steamid=${userSteamData.steamID}`),
        fetch(
          `http://localhost:3000/steam/achievements?steamid=${userSteamData.steamID}&appid=${userSteamData.appID}`
        ),
        fetch(
          `http://localhost:3000/steam/gamestats?steamid=${userSteamData.steamID}&appid=${userSteamData.appID}`
        ),
        fetch(`http://localhost:3000/steam/ownedgames?steamid=${userSteamData.steamID}`),
        fetch(`http://localhost:3000/steam/user?steamid=${userSteamData.steamID}`),
      ]);

      const recentGames = await recentGamesRes.json();
      const achievements = await achRes.json();
      const gameStats = await gameRes.json();
      const ownedGames = await ownedRes.json();
      const user = await userRes.json();

      localStorage.setItem('recentgames', JSON.stringify(recentGames));
      localStorage.setItem('achievements', JSON.stringify(achievements));
      localStorage.setItem('gameStats', JSON.stringify(gameStats));
      localStorage.setItem('ownedGames', JSON.stringify(ownedGames));
      localStorage.setItem('user', JSON.stringify(user));

      setIsActive((prev) => !prev);

      setLoad(false);
    } catch (error) {
      console.error('Error: ' + error.message);
    }
  };

  return { fetchData, load, isActive };
}
