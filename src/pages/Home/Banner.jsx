import React from "react";
import banner from "/media/couples.jpg";
const Banner = () => {
  return (
    <div className="h-[60vh] lg:h-full relative flex items-center justify-between  ">

      <div className="flex flex-col justify-center items-center fixed lg:top-[60] py-10 top-[20%] text-stone-500 bg-white/20 backdrop-blur-lg  shadow-lg  rounded-lg  -z-[5] gap-4 text-semibold ">
        <h2 className="drop-shadow-lg text-4xl uppercase text-center w-[100vw] font-serif ">
          Atharva Cinematography
        </h2>
        <p className="drop-shadow-lg uppercase text-stone-400  tracking-[3px]">Classic Cinematic Shoots</p>
      </div>

      <div

        className=" fixed  w-full bottom-0 left-0 lg:h-[100vh] h-[60vh] bg-cover  bg-bottom -z-10"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      ></div>
    </div>
  );
};

export default Banner;
