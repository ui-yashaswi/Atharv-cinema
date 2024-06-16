import React from "react";
import ContactFrom from "./pages/Home/ContactFrom";
import Navbar from "./components/Navbar";
import Testimonials from "./pages/Home/Testimonials";
import Footer from "./pages/Home/Footer";
import Banner from "./pages/Home/Banner";
import img from "/media/wedding.jpg";
import imgPhone from "/media/wedding-phone.jpg";
function App() {
  return (
    <main className="relative z-10">
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
}

export default App;
