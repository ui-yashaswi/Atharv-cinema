import React from "react";
import ContactFrom from "./pages/Home/ContactFrom";
import Navbar from "./components/Navbar";
import Testimonials from "./pages/Home/Testimonials";
import Footer from "./pages/Home/Footer";
import Banner from "./pages/Home/Banner";
import img from "/media/bg.jpg";
function App() {
  return (
    <main>
      <Navbar />
      <img src={img} alt="" />
      <Banner />

      <ContactFrom />

      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;
