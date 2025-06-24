// Components
import UserNameSteamIdForm from '@/features/GameStatistics/userNameForm/components/UserSteamIdForm';
import Dashboard from '@/features/GameStatistics/Dashboard/Dashboard';
import UserSteamGameForm from '@/features/GameStatistics/userNameForm/components/userSteamGameForm';
import AnimatedButton from '@/components/AnimatedButton';

// JOTAI
import { useAtom } from 'jotai';
import { steamDataJotai } from '@/features/GameStatistics/stores/steamData.jotai';

export default function GameStatistics() {
  const [steamData] = useAtom(steamDataJotai);

  const handleClick = async () => {
    if (!steamData.steamID || !steamData.appID) {
      console.log('1');
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/steam/userstats?steamid=${steamData.steamID}&appid=${steamData.appID}`
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error: ' + error.message);
    }
  };

  return (
    <section className="p-10 flex items-center m-auto gap-2">
      <div className="flex gap-x-2">
        <UserNameSteamIdForm />
        <UserSteamGameForm />
      </div>
      <AnimatedButton onClick={handleClick}>Click</AnimatedButton>
    </section>
  );
}
