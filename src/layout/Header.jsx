import { NavLink } from 'react-router-dom';
import { FaChartBar } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <NavLink to={'/'} className="text-2xl font-bold text-grayText">
        ReGraph
      </NavLink>

      <div className="flex items-center gap-4">
        <NavLink to={'/charts'} className="text-gray-600 hover:text-blue-600 transition">
          Charts
        </NavLink>
        <NavLink className="text-gray-600 hover:text-blue-600 transition">Settings</NavLink>

        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
          R
        </div>
      </div>
    </header>
  );
}
