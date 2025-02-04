import React from "react";
import Footer from "../components/Footer/Footer";
import MobileHeader from "../components/Mobile/MobileHeader";
import MobileSection from "../components/Mobile/MobileSection";
import Navbar from "../components/navbar/Navbar";

const Mobile = () => {
  return (
    <>
      <Navbar />
      <MobileHeader />
      <MobileSection />
      <Footer />
    </>
  );
};

export default Mobile;
