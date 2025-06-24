// Shadcn UI
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from '@/components/ui/sidebar';

//Icons
import { House, ChartLine, Gamepad } from 'lucide-react';

//React && State
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { NavLink } from 'react-router-dom';

export default function Aside() {
  const [active, setActive] = useState('');
  const location = useLocation();

  const styleClicked =
    'bg-highlight before:w-[2px] before:bg-highlight-secondary before:absolute before:left-0 before:h-full before:rounded-tl before:rounded-bl';

  const styleActive =
    'active:bg-secondary-light active:text-secondary-foreground active:before:w-[2px]  active:before:bg-highlight-secondary active:before:absolute active:before:left-0 active:before:h-full active:before:rounded-tl active:before:rounded-bl';

  const styleHover =
    'hover:bg-highlight hover:text-secondary-foreground hover:before:w-[2px]  hover:before:bg-highlight-secondary hover:before:absolute hover:before:left-0 hover:before:h-full hover:before:rounded-tl hover:before:rounded-bl';

  const buttons = [
    { id: 'home', label: 'Home', path: '/', icon: House },
    {
      id: 'create',
      label: 'Create chart',
      path: '/create-chart',
      icon: ChartLine,
    },
    {
      id: 'gameStat',
      label: 'Game statistics',
      path: '/game-statistics',
      icon: Gamepad,
    },
  ];

  useEffect(() => {
    const found = buttons.find((item) => item.path === location.pathname);
    setActive(found.id);
  }, []);

  return (
    <Sidebar className="w-64 h-screen flex flex-col px-4 py-6 border border-background-border shadow-custom-shadow">
      <SidebarContent>
        <SidebarHeader className="text-foreground text-2xl">ReGraph</SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent className="relative">
            <SidebarMenu>
              {buttons.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 p-2 rounded text-secondary-foreground text-[1.1em] hover:bg-highlight ${styleActive} ${styleHover} ${isActive ? styleClicked : null}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <item.icon className={`${isActive ? 'text-highlight-secondary' : null}`} />
                        {item.label}
                      </>
                    )}
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
