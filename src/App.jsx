// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import SharedLayout from './layout/SharedLayout';

// Pages
import Home from './pages/Home';
import GameStatistics from './pages/GameStatistics';
import Charts from './pages/Charts';
import Profile from './pages/Profile';
import CreatePage from './pages/CreatePage';
import RecentDashboard from './pages/RecentDashboard';

export default function App() {
  return (
    <div className="bg-background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-chart" element={<CreatePage />} />
            <Route path="/gameStatistics" element={<GameStatistics />} />
            <Route path="/recentDashboard" element={<RecentDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
