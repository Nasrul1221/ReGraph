// JOTAI
import { useAtom } from 'jotai';
import { userSteamDataJotai } from '@/features/GameStatistics/stores/userSteamData.jotai';

// React && State
import { useState } from 'react';
import GameStatistics from '@/pages/GameStatistics';

export default function useFetchData() {
  const [userSteamData] = useAtom(userSteamDataJotai);
  const [load, setLoad] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  const fetchData = async () => {
    try {
      setLoad(true);
      const responses = await Promise.all([
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

      responses.forEach((response) => {
        if (!response.ok) throw new Error('The error has occured');
      });
      const [recentGames, achievements, gameStats, ownedGames, user] = await Promise.all(
        responses.map((item) => item.json())
      );

      localStorage.setItem('recentgames', JSON.stringify(recentGames));
      localStorage.setItem('achievements', JSON.stringify(achievements));
      localStorage.setItem('gameStats', JSON.stringify(gameStats));
      localStorage.setItem('ownedGames', JSON.stringify(ownedGames));
      localStorage.setItem('user', JSON.stringify(user));

      setIsActive((prev) => !prev);

      setLoad(false);
    } catch (error) {
      setFetchError(true);
      setLoad(false);

      return <GameStatistics />;
    }
  };

  return { fetchData, load, isActive, fetchError, setFetchError };
}
