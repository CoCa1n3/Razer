import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import PcHeader from "../components/PC-Header/Pc-Header";
import PCsect from "../components/PC-Sect1/PCsect";
import PCsect2 from "../components/PC-Sect2/PCsect2";
import PCaside from "../components/PC-Aside/PCaside";
import Footer from "../components/Footer/Footer";

const Pc = () => {
  useEffect(() => {
    document.title = ` Razer United States | PC `;
  }, []);
  return (
    <>
      <Navbar />
      <PcHeader />
      <PCsect />
      <PCsect2 />
      <PCaside />
      <Footer />
    </>
  );
};

export default Pc;
