import React, { useContext } from "react";
import "./navbar.scss";
import DrawerComponent from "../drawer/DrawerComponent";
import logo from "../../images/razer-ths-logo.svg";
import cart_icon from "../../images/cart_icon.svg";
import mobile_burger from "../../images/mobile-menu.svg";
import Drawer from "react-modern-drawer";
import { NavLink } from "react-router-dom";
import { Context } from "../../context";
import { FavContext } from "../../favContent";
import { FaRegHeart } from "react-icons/fa";
import { useCart } from "react-use-cart";

const Navbar = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const { mobile, setMobile } = useContext(Context);
  const { items } = useCart();
  const { fav } = useContext(FavContext);
  return (
    <>
      <div className="fixed-nav" style={{ borderBottom: "1px solid #4bed00" }}>
        <div className="navbar-container">
          <div
            className="navbar-burger"
            onClick={() => {
              setMobile(true);
              document.body.style.overflowY = "hidden";
            }}
          >
            <img src={mobile_burger} alt="" />
          </div>
          <div className="navbar-logo">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="navbar-links">
            <NavLink to="/pc">PC</NavLink>
            <NavLink to="/mobile">Mobile</NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/store">Store</NavLink>
          </div>
          <div className="navbar-cart">
            <NavLink className="storelink heart" to="/favourites">
              <FaRegHeart size={25} />
              <span>{fav.length}</span>
            </NavLink>
            <NavLink className="storelink" to="/storeCard">
              <img src={cart_icon} alt="" />
              <span>{items.length}</span>
            </NavLink>
          </div>
        </div>
      </div>

      <Drawer
        open={mobile}
        onClose={() => setMobile(false)}
        direction="left"
        duration={0}
        className="drawer-container"
      >
        <DrawerComponent />
      </Drawer>
    </>
  );
};

export default Navbar;
