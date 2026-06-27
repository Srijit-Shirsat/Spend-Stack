import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Expenses from "./layout/Expense";
import Analytics from "./layout/Analytics";
import Settings from "./layout/Settings";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route element={<DashboardLayout />}>

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/expenses" element={<Expenses />} />

        <Route path="/analytics" element={<Analytics />} />

        <Route path="/settings" element={<Settings />} />

      </Route>

    </Routes>
  );
}

export default App;
