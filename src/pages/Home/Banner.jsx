import React from "react";
import banner from "/media/couples.jpg";
const Banner = () => {
  return (
    <div className="  h-full relative flex items-center justify-between  ">
      <div className="flex flex-col fixed lg:top-[60] top-40 text-stone-500 bg-white/20 backdrop-blur-lg shadow-lg p-4 rounded-lg left-2 -z-[5] gap-4 text-semibold ">
        <h2 className="drop-shadow-lg text-xl">Atharva Cinematography</h2>
        <p className="drop-shadow-lg">Classic Cinematic Shoots ...</p>
      </div>
      <div
        className=" fixed w-full bottom-0 left-0 h-[100vh]  bg-cover  bg-bottom -z-10"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      ></div>
    </div>
  );
};

export default Banner;
