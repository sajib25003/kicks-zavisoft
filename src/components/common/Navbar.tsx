import { useState } from "react";
import logo from "../../assets/Logo.svg";
import down_icon from "../../assets/icons/caret_down.svg";
import search_icon from "../../assets/icons/Search.svg";
import user_icon from "../../assets/icons/User.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#FAFAFA] rounded-xl md:rounded-3xl px-6 py-4 md:p-8 text-black">
      <div className="flex justify-between items-center">
        {/* ✅ Left Section */}
        <div className="flex items-center gap-8">
          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden rubik text-base font-semibold md:flex items-center gap-10">
            <p className="cursor-pointer">New Drops 🔥</p>

            <div className="flex items-center gap-1 cursor-pointer">
              <p>Men</p>
              <img src={down_icon} alt="down icon" />
            </div>

            <div className="flex items-center gap-1 cursor-pointer">
              <p>Women</p>
              <img src={down_icon} alt="down icon" />
            </div>
          </div>
        </div>

        {/* ✅ Center Logo */}
        <div>
          <img src={logo} alt="kick-logo" className="h-6 md:h-8" />
        </div>

        {/* ✅ Right Section */}
        <div className="flex items-center gap-2.25 md:gap-10">
          {/* Hide search in mobile */}
          <img
            src={search_icon}
            alt="search icon"
            className="hidden md:block cursor-pointer"
          />

          <img
            src={user_icon}
            alt="user icon"
            className="h-5 w-5 md:h-6 md:w-6 cursor-pointer"
          />

          <div className="rounded-full bg-[#FFA52F] h-7 w-7 md:h-8 md:w-8 flex justify-center items-center">
            <p className="font-semibold text-[#232321] text-sm md:text-base">
              0
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-left">
          <p className="cursor-pointer">New Drops 🔥</p>
          <p className="cursor-pointer">Men</p>
          <p className="cursor-pointer">Women</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
