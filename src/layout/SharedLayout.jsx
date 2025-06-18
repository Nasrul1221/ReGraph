import { Outlet } from 'react-router-dom';
import Aside from '../layout/Aside';

export default function SharedLayout() {
  return (
    <div className="flex">
      <Aside />
      <section className="flex flex-1">
        <Outlet />
      </section>
    </div>
  );
}
