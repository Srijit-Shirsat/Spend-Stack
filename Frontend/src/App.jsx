import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Expenses from "./layout/Expense";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route element={<DashboardLayout />}>

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/expenses" element={<Expenses />} />

      </Route>

    </Routes>
  );
}

export default App;
