import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import ServicesHeader from "../components/Services/ServicesHeader";

const Services = () => {
  useEffect(() => {
    document.title = ` Razer United States | Services`;
  }, []);
  return (
    <>
      <Navbar />
      <ServicesHeader />
    </>
  );
};

export default Services;
