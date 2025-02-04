import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Section from "../components/section/Section";
import Section2 from "../components/section2/Section2";
import GridSect from "../components/GridSection/GridSect";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";

const Home = () => {
  useEffect(() => {
    document.title = ` Razer United States | Home`;
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Section />
      <Section2 />
      <GridSect />
      <Footer />
    </>
  );
};

export default Home;
