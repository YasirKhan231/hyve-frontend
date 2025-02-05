// src/components/Navbar.jsx
import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-white border-b-3 border-[#F7A800] z-20 relative">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="HYVE Logo"
            width={32}
            height={32}
            className="rounded"
          />
          <span className="text-2xl font-bold text-black tracking-wide font-poppins">
            HYVE
          </span>
        </div>
        <nav>
          <ul className="flex items-center gap-14">
            <li>
              <a
                href="#"
                className="text-[15px] text-black font-semibold hover:text-[#F7A800] font-poppins"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[15px] text-black font-semibold hover:text-[#F7A800] font-poppins"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[15px] text-black font-semibold hover:text-[#F7A800] font-poppins"
              >
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
