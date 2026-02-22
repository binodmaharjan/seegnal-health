import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import "./DashboardLayout.scss";

function DashboardLayout() {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
