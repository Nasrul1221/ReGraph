import { useAtom } from 'jotai';
import { steamDataJotai } from '../stores/steamData.jotai';

export default function Dashboard() {
  const [steamData] = useAtom(steamDataJotai);

  return <p>{steamData.steamID}</p>;
}
