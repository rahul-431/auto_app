import React from "react";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Drivers from "./pages/Drivers";
import Rides from "./pages/Rides";
import Setting from "./pages/Setting";
import Systemlog from "./pages/Systemlog";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function AdminMain() {
  return (
    <RouterProvider>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="rides" element={<Rides />} />
          <Route path="setting" element={<Setting />} />
          <Route path="systemLog" element={<Systemlog />} />
        </Route>
      </Routes>
    </RouterProvider>
  );
}
