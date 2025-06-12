import { IoIosAddCircle } from "react-icons/io";

export default function AddLabels({ fun, count }) {
  return (
    <div className="flex gap-3 items-center">
      <h1 className="order-2 text-black font-bold">Add label: {count}</h1>
      <div className="bg-white rounded-full group hover:bg-primary transition-all duration-300">
        <IoIosAddCircle
          className="text-3xl order-1 text-black group-hover:text-white transition-all duration-300 cursor-pointer"
          onClick={fun}
        />
      </div>
    </div>
  );
}
