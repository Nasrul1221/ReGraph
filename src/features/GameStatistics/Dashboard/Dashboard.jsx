import { useAtom } from 'jotai';
import { userNameJotai } from '../stores/userName.jotai';

export default function Dashboard() {
  const [userName] = useAtom(userNameJotai);

  return <div>{userName && <p>{userName}</p>}</div>;
}
