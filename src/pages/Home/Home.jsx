import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "./Banner";
import ContactFrom from "./ContactFrom";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import img from "/media/wedding.jpg";
import imgPhone from "/media/wedding-phone.jpg";

const Home = () => {
  return (
    <main className="relative z-10 " data-scroll-section>
      <Navbar />

      <div className="lg:block hidden">
        <img src={img} className="object-cover  lg:w-full  h-screen" alt="" />
      </div>
      <div className="lg:hidden block">
        <img
          src={imgPhone}
          className="object-cover  lg:w-full  h-screen"
          alt=""
        />
      </div>
      <Banner />

      <ContactFrom />

      <Testimonials />
      <Footer />
    </main>
  );
};

export default Home;
