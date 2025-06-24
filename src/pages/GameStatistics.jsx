import UserName from '@/features/GameStatistics/userNameForm/components/UserName';
import Dashboard from '@/features/GameStatistics/Dashboard/Dashboard';

import { useAtom } from 'jotai';
import { userNameJotai } from '@/features/GameStatistics/stores/userName.jotai';

export default function GameStatistics() {
  const [userName] = useAtom(userNameJotai);
  return (
    <section className="p-10 flex items-center m-auto">
      {userName ? <Dashboard /> : <UserName />}
    </section>
  );
}
