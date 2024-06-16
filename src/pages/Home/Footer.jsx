import React from "react";
import gamla from "/media/gamla.jpg";
import { IoLogoWhatsapp } from "react-icons/io";
const Footer = () => {
  return (
    <div className="w-full h-full flex flex-col py-12 justify-center items-center bg-stone-300 gap-10 pb-10 ">
      <h2 className="lg:text-4xl text-lg uppercase font-semibold text-stone-500 py-8">
        follow us on social network
      </h2>
      <div className="img w-[80vw] lg:w-[50vw] flex lg:h-auto h-[70vh] bg-stone-700 ">
        <img src={gamla} className=" object-cover lg:h-[80vh] " alt="gamla" />
        <div className="lg:flex hidden w-[24vw]  ">
          <div className="content  items-center flex p-8 text-center">
            <h1 className=" text-stone-300   lg:text-2xl font-sans  ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              consectetur sed modi voluptates magni quia aut fugiat voluptas,
              ctetur adipisicing elit. Officia ratione voluptate?
            </h1>
          </div>
        </div>
      </div>

      <h1 className="lg:w-[50vw] w-[80vw]  text-center lg:text-2xl font-sans  ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
        consectetur sed modi voluptates magni quia aut fugiat voluptas, ctetur
        adipisicing elit. Officia ratione voluptate?
      </h1>

      <div className="text-center">
        <button className="px-4 flex items-center justify-center gap-3  lg:py-5 lg:px-10 py-2 bg-stone-600 text-white rounded-lg">
          <a href="https://api.whatsapp.com/send?phone=9343961761">REACH OUT</a>
          <IoLogoWhatsapp size={20} />
        </button>
      </div>
    </div>
  );
};

export default Footer;
