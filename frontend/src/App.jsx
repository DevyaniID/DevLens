import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Architecture from "./pages/Architecture";
import AIChat from "./pages/AIChat";
import Reports from "./pages/Reports";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/ai-chat" element={<AIChat />} />
          <Route path="/reports" element={<Reports />} />
        </Route>

        <Route path="/" element={<Navigate to="/dashboard" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;