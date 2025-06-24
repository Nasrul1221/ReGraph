import UserName from '@/features/GameStatistics/userNameForm/components/userSteamIdForm';
import Dashboard from '@/features/GameStatistics/Dashboard/Dashboard';

import { useAtom } from 'jotai';
import { steamDataJotai } from '@/features/GameStatistics/stores/steamData.jotai';

export default function GameStatistics() {
  const [steamData] = useAtom(steamDataJotai);
  return (
    <section className="p-10 flex items-center m-auto">
      {steamData.steamID ? <Dashboard /> : <UserName />}
    </section>
  );
}
