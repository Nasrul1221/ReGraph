import { Outlet } from "react-router-dom";
import Header from "./Header";
import Aside from "./Aside";

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
