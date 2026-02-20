import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#E7E7E3] max-w-360 mx-auto">
      <div className="pt-8 px-4 lg:px-15">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
      <div className="py-6 md:py-4.5">
        <p className="open-sans text-base font-normal text-[#232321] text-center ">
          &copy; All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Layout;
