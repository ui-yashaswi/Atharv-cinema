import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-stone-400 p-3 lg:px-20 px-10  flex justify-between ">
      <div className="flex flex-col justify-center">
        <h1 className="text-xs text-stone-700 tracking-[2px]">STORIES BY</h1>
        <h1 className="text-lg font-semibold text-stone-800 -tracking-wider">
          INSIDEME
        </h1>
      </div>

      <div className="bg-stone-600 p-3">
        <img src="" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
