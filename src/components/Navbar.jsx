import React from "react";
import menu from "/media/icon.png";

import { useState, useEffect } from "react";
const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    /* -------------------------------------------------------------------------- */
    /*                         added dependecy of scrollY                         */
    /* -------------------------------------------------------------------------- */
  }, [scrollY]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolled
          ? "backdrop-blur-xl shadow-lg  rounded-b-xl"
          : " backdrop-blur-sm "
      } fixed w-full duration-1000 py-4 lg:px-20  px-6  flex justify-between `}
    >
      <div
        className={`flex  w-full items-center duration-300 ${
          scrolled ? "text-stone-400" : "text-stone-200"
        } justify-center`}
      >
        <h1 className={`lg:text-xl text-lg font-bold  mr-4`}>
          STORIES BY
        </h1>
        <h1 className=" text-lg lg:text-2xl font-semibold  tracking-wider">
          Atharva Cinema
        </h1>
      </div>

      <div className="bg-stone-600 h-12 rounded-lg p-2">
        <img
          src={menu}
          className="cursor-pointer text-stone-400 h-8  "
          alt=""
        />
      </div>
    </nav>
  );
};

export default Navbar;
