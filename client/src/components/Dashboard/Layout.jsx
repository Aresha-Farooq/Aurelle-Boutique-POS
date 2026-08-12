import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-skin min-h-screen px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;