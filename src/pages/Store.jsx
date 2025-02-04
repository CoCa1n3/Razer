import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import StoreHeader from "../components/StoreHeader/StoreHeader";
import Footer from "../components/Footer/Footer";
import StoreAside from "../components/StoreASide/StoreAside";
import StoreUseCart from "../components/StoreUseCart/StoreUseCart";

const Store = () => {
  useEffect(() => {
    document.title = ` Razer United States | Store`;
  }, []);
  return (
    <>
      <Navbar />
      <StoreHeader />
      <StoreUseCart />
      <StoreAside />
      <Footer />
    </>
  );
};

export default Store;
