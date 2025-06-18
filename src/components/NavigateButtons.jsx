import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function NavigateButtons({ obj }) {
  const location = useLocation();
  const [active, setActive] = useState('');

  useEffect(() => {
    const found = obj.find((item) => item.path === location.pathname);
    if (found) setActive(found.id);
  }, [location, obj]);

  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <>
      {obj.map((item) => (
        <div
          className={`group hover:bg-primary-light py-1 px-2 cursor-pointer rounded transition-colors duration-300 ${active === item.id ? 'bg-primary-light' : null}`}
          key={item.id}
          onClick={() => handleClick(item.id)}
        >
          <NavLink className="text-xl relative" to={item.path}>
            <p
              className={`ml-7 text-grayText group-hover:text-primary-foreground transition-colors duration-300 ease-in-out ${active === item.id ? 'text-primary-foreground' : null}`}
            >
              {item.label}
            </p>
            <item.Icon
              className={`absolute group-hover:text-primary-foreground text-grayText text-2xl top-1/2 left-0 transform -translate-y-1/2 transition-colors duration-300 ease-in-out ${active === item.id ? 'text-primary-foreground' : null}`}
            />
          </NavLink>
        </div>
      ))}
    </>
  );
}
