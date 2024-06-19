import React from "react";
import gamla from "/media/gamla.jpg";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { LuInstagram } from "react-icons/lu";
import { ImLinkedin } from "react-icons/im";
import { FaSquareFacebook } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-full h-full flex flex-col pt-12 justify-center items-center bg-stone-300 gap-10  ">
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="lg:text-4xl text-lg uppercase font-semibold  text-stone-500  py-8">
          follow us on social network
        </h2>
        <h1 className="text-stone-400 lg:text-xl drop-shadow-lg">
          Timeless Photos, Endless Memories
        </h1>
      </div>

      <div className="img w-[80vw] lg:w-[50vw] flex lg:h-auto h-[70vh] bg-stone-700 ">
        <img src={gamla} className=" object-cover lg:h-[80vh] " alt="gamla" />
        <div className="lg:flex hidden w-[24vw]  ">
          <div className="content  items-center flex p-8 text-center">
            <h1 className=" text-stone-500   lg:text-2xl font-sans p-8 leading-9 font-semibold  ">
              I am Daneshwar Sahu, owner of Atharva Cinema Photography in
              Raipur. Since 2015, I’ve captured over 200 weddings, cherishing
              and immortalizing the beauty of bonds with elegance and
              authenticity in every celebration.
            </h1>
          </div>
        </div>
      </div>

      <div className="lg:w-[30vw] w-[60vw] h-[3px] bg-stone-400 rounded-lg lg:hover:w-[50vw] hover:w-[80vw] duration-300 "></div>

      <em className="lg:w-[50vw] w-[80vw] leading-8 text-stone-500 text-center text-lg lg:text-xl font-serif font-semibold  hover:text-stone-700 ">
        I am Daneshwar Sahu, owner of Atharva Cinema Photography in Raipur.
        Since 2015, I’ve captured over 200 weddings, cherishing and
        immortalizing the beauty of bonds with elegance and authenticity in
        every celebration.
      </em>

      <div className="text-center">
        <button className="px-4 flex  gap-4 lg:py-5 lg:px-10 py-2 hover:bg-stone-800 hover:shadow-xl bg-stone-600 text-stone-200 rounded-lg">
          <a href="https://api.whatsapp.com/send?phone=9343961761">REACH OUT</a>
          <IoLogoWhatsapp size={20} />
        </button>
      </div>

      <div className=" w-full flex justify-between px-40 items-center  gap-4 lg:flex-row flex-col lg:py-8 py-4 bg-stone-200 ">
        <h1 className="drop-shadow-lg text-xl lg:text-lg uppercase text-center  text-stone-400 text-nowrap font-serif p-3 ">
          Atharva Cinema
        </h1>

        <div className="flex gap-6">
          <a href="https://youtube.com/@atharvacinema?si=hwAb1A9GRx6xLSL0">
            {" "}
            <IoLogoYoutube size={25} />
          </a>

          <a href="https://www.instagram.com/atharva_cinema?igsh=MWFhOXJzYW1xNXp2bQ==">
            {" "}
            <LuInstagram size={22} />
          </a>

          <ImLinkedin size={20} />
          <FaSquareFacebook size={23} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
