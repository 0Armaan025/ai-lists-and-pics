import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span
              className="font-bold text-2xl underline underline-offset-1 decoration-wavy decoration-purple-500      "
              style={{ fontFamily: "raleway, sans-serif" }}
            >
              AIListsAndPics
            </span>
          </div>
          <div
            className="hidden md:flex md:space-x-8 md:items-center"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            <a
              href="#"
              className=" hover:text-[#4d4d4d] transition-all px-1 py-2 text-sm font-semibold"
            >
              Home
            </a>
            <a
              href="#"
              style={{ fontFamily: "Orbitron, sans-serif" }}
              className="px-1 hover:text-[#4d4d4d] transition-all py-2 text-sm font-semibold"
            >
              About Us
            </a>
          </div>
          <div className="flex items-center">
            <button
              className="bg-transparent hover:bg-white hover:text-black cursor-pointer transition-all px-8 py-2 rounded-3xl text-sm font-medium border-2 border-black "
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
