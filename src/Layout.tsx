import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div className="h-screen bg-[#E7E7E3] max-w-360">
      <div className="pt-8 px-4 lg:px-15">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
