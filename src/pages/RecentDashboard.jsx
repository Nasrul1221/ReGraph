import React from 'react';
import Dashboard from '@/features/GameStatistics/Dashboard/Dashboard';
import useGetData from '@/features/GameStatistics/Dashboard/hooks/useGetData';

export default function RecentDashboard() {
  const recentgames = JSON.parse(localStorage.getItem('recentgames'));
  const achievements = JSON.parse(localStorage.getItem('achievements'));
  const gameStats = JSON.parse(localStorage.getItem('gameStats'));
  const ownedGames = JSON.parse(localStorage.getItem('ownedGames'));
  const user = JSON.parse(localStorage.getItem('user'));

  return recentgames && achievements && gameStats && ownedGames && user ? (
    <div className="m-auto">
      <Dashboard />
    </div>
  ) : (
    <p>123</p>
  );
}
