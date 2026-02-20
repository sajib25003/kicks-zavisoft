import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#E7E7E3] max-w-360 mx-auto">
      <div className="pt-8 px-4 lg:px-15">
        <Navbar />
      </div>
      <Outlet />
      <p className="open-sans text-base font-normal text-[#232321] text-center">
        &copy; All rights reserved
      </p>
    </div>
  );
};

export default Layout;
