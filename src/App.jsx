import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./layout/SharedLayout";
import Home from "./pages/Home";
import Charts from "./pages/Charts";
import Profile from "./pages/Profile";
import CreatePage from "./pages/CreatePage";
import Form from "./features/createForm/components/Form";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-chart" element={<CreatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
