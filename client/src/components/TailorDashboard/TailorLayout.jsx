import TailorSidebar from "./TailorSidebar";
import { Outlet } from "react-router-dom";

const TailorLayout = () => {
  return (
    <div className="flex">
      <TailorSidebar />
      <div className="flex-1 bg-skin min-h-screen px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default TailorLayout;
