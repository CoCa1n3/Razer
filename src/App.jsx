import { useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pnf/PageNotFound";
import Pc from "./pages/Pc";
import Mobile from "./pages/Mobile";
import Store from "./pages/Store";
import StoreCard from "./pages/StoreCard";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import Services from "./pages/Services";
import CreatePost from "./pages/AdminPanel/CreatePost/CreatePost";
import AdminPassword from "./pages/AdminPassword";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Favourites from "./pages/Favourites/Favourites";
// import CreatePost from "./pages/AdminPanel/CreatePost/CreatePost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/pc" element={<Pc />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/store" element={<Store />} />
        <Route path="/storeCard" element={<StoreCard />} />
        <Route path="/createPostRazerAdmin" element={<CreatePost />} />
        <Route path="/adminPrivateRazer" element={<AdminPanel />} />
        <Route path="/services" element={<Services />} />
        <Route path="/adminPassword" element={<AdminPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </>
  );
}

export default App;
