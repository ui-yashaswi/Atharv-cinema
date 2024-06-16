import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-stone-300 gap-20 py-20 ">
      <div className="img w-[80vw] h-[60vh] bg-stone-700 "></div>

      <h1 className="lg:w-[50vw] w-[80vw] text-center lg:text-2xl font-sans  ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
        consectetur sed modi voluptates magni quia aut fugiat voluptas, ctetur
        adipisicing elit. Officia ratione voluptate?
      </h1>

      <div className="text-center">
        <button className="px-4  lg:py-5 lg:px-10 py-2 bg-stone-600 text-white rounded-lg">
          REACH OUT
        </button>
      </div>
    </div>
  );
};

export default Footer;
