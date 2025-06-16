import { Outlet } from 'react-router-dom';
import Header from '../layout/Header';
import Aside from '../layout/Aside';

export default function SharedLayout() {
  return (
    <>
      <Header />
      <div className="flex">
        <Aside />
        <Outlet />
      </div>
    </>
  );
}
