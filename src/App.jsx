// Router
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';

// Layout
import SharedLayout from './layout/SharedLayout';

// Pages
import Home from './pages/Home';
import GameStatistics from './pages/GameStatistics';
import Charts from './pages/Charts';
import Profile from './pages/Profile';
import CreatePage from './pages/CreatePage';
import RecentDashboard from './pages/RecentDashboard';

import React from 'react';

function AppRoutes() {
  let routes = useRoutes([
    {
      path: '/',
      element: <SharedLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: '/charts', element: <Charts /> },
        { path: '/profile', element: <Profile /> },
        { path: '/create-chart', element: <CreatePage /> },
        { path: '/gameStatistics', element: <GameStatistics /> },
        { path: '/recentDashboard', element: <RecentDashboard /> },
      ],
    },
  ]);

  return routes;
}

export default function App() {
  return (
    <div className="bg-background">
      <AppRoutes />
    </div>
  );
}
