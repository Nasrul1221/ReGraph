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
import { Separator } from '@/components/ui/separator';

//React && State
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { IoIosAddCircle } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';

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
    { id: 'home', label: 'Home', Icon: FaHome, path: '/' },
    { id: 'create', label: 'Create chart', Icon: IoIosAddCircle, path: '/create-chart' },
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
                  <SidebarMenuButton
                    asChild
                    className={`rounded text-secondary-foreground ${active === item.id ? styleClicked : null} ${styleActive} ${styleHover}`}
                  >
                    <NavLink to={item.path} onClick={() => setActive(item.id)}>
                      {item.label}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );

  // <aside className="w-64 h-screen flex flex-col px-4 py-6 border border-background-border shadow-custom-shadow translate-x-0 duration-300">
  //     <div>
  //       <h1 className="font-bold text-2xl pb-2 mb-5 border-b border-primary-light text-grayText">
  //         <NavLink to={'/'}>ReGraph</NavLink>
  //       </h1>
  //       <nav className="flex flex-col gap-y-2">
  //         <NavigateButtons obj={buttons} />
  //       </nav>
  //     </div>
  //   </aside>
}
