import { NavLink } from 'react-router-dom';
import { IoIosAddCircle } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import NavigateButtons from '@/components/NavigateButtons';

export default function Aside() {
  const buttons = [
    { id: 'home', label: 'Home', Icon: FaHome, path: '/' },
    { id: 'create', label: 'Create chart', Icon: IoIosAddCircle, path: '/create-chart' },
  ];

  return (
    <aside className="bg-aside w-64 h-screen flex flex-col px-4 py-6">
      <div>
        <h1 className="font-bold text-2xl pb-2 mb-5 border-b border-primary-light text-grayText">
          <NavLink to={'/'}>ReGraph</NavLink>
        </h1>
        <nav className="flex flex-col gap-y-2">
          <NavigateButtons obj={buttons} />
        </nav>
      </div>
    </aside>
  );
}
