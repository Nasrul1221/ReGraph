import { CirclePlus } from 'lucide-react';

export default function AddLabels({ fun, count }) {
  return (
    <div className="flex gap-3 items-center mb-3">
      <h1 className="order-2 text-secondary-foreground">Add label: {count}</h1>
      <div className="bg-white rounded-full group hover:bg-highlight-secondary transition-all duration-300">
        <CirclePlus
          className="text-3xl order-1 text-black group-hover:text-white transition-all duration-300 cursor-pointer"
          onClick={fun}
        />
      </div>
    </div>
  );
}
