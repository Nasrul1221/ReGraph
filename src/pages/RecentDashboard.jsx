import React from 'react';
import Dashboard from '@/features/GameStatistics/Dashboard/Dashboard';
import useGetData from '@/features/GameStatistics/Dashboard/hooks/useGetData';
import Card from '@/components/Card';
import AnimatedButton from '@/components/AnimatedButton';
import { NavLink } from 'react-router-dom';

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
    <div className="m-auto">
      <Card>
        <p className="mb-2">There is no data yet</p>
        <AnimatedButton asChild>
          <NavLink to="/gameStatistics">Create dashboard</NavLink>
        </AnimatedButton>
      </Card>
    </div>
  );
}
