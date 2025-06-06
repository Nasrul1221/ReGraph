import { NavLink } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import { FaHome } from "react-icons/fa";

export default function Aside() {
  return (
    <aside className="bg-white w-64 min-h-screen flex flex-col px-4 py-6 border-r border-gray-200">
      <div>
        <h1 className="font-bold text-2xl">Menu</h1>
        <nav className="flex flex-col gap-y-2">
          <div className="bg-primary group hover:bg-white rounded-full p-1 pl-2 transition-colors duration-300 ease-in-out">
            <NavLink className="text-xl relative">
              <p className="ml-7 text-white group-hover:text-primary transition-colors duration-300 ease-in-out">
                Home
              </p>
              <FaHome className="absolute group-hover:text-primary text-white text-2xl top-1/2 left-0 transform -translate-y-1/2 transition-colors duration-300 ease-in-out" />
            </NavLink>
          </div>

          <div className="bg-primary group hover:bg-white rounded-full p-1 pl-2 transition-colors duration-300 ease-in-out">
            <NavLink className="text-xl relative">
              <p className="ml-7 text-white group-hover:text-primary transition-colors duration-300 ease-in-out">
                Create
              </p>
              <IoIosAddCircle className="absolute group-hover:text-primary text-white text-2xl top-1/2 left-0 transform -translate-y-1/2 transition-colors duration-300 ease-in-out" />
            </NavLink>
          </div>
        </nav>
      </div>
    </aside>
  );
}
