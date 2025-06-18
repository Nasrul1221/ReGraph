import { Outlet } from 'react-router-dom';
import Aside from '../layout/Aside';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function SharedLayout() {
  return (
    <SidebarProvider className="flex">
      <Aside />
      <main className="flex flex-1">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
