import React from "react";
import "./drawer.scss";
import logo from "../../images/razer-ths-logo.svg";
import burger_close from "../../images/menu-close.png";
import { Context } from "../../context";
import { NavLink } from "react-router-dom";

const DrawerComponent = () => {
  const { setMobile } = React.useContext(Context);

  return (
    <div style={{ maxWidth: "90%", margin: "0 auto" }}>
      <div className="drawer-header">
        <img
          className="close"
          src={burger_close}
          alt=""
          onClick={() => {
            setMobile(false);
            document.body.style.overflowY = "scroll";
          }}
        />
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="drawer-body">
        <input type="text" placeholder="Search razer.com" />

        {/*Change span to <Link to='route'></Link>*/}

        <div className="navigate-links">
          <NavLink
            to="/pc"
            onClick={() => {
              setMobile(false);
              document.body.style.overflowY = "scroll";
            }}
          >
            PC
          </NavLink>
          <NavLink
            to="/mobile"
            onClick={() => {
              setMobile(false);
              document.body.style.overflowY = "scroll";
            }}
          >
            Mobile
          </NavLink>
          <NavLink
            to="/"
            onClick={() => {
              setMobile(false);
              document.body.style.overflowY = "scroll";
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => {
              setMobile(false);
              document.body.style.overflowY = "scroll";
            }}
          >
            Services
          </NavLink>
          <NavLink
            to="/store"
            onClick={() => {
              setMobile(false);
              document.body.style.overflowY = "scroll";
            }}
          >
            Store
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DrawerComponent;
