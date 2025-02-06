import React from "react";
import "./footer.scss";
import facebook from "../../images/facebook.svg";
import inst from "../../images/inst.svg";
import twitter from "../../images/twitter.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-father">
            <div className="f-1">
              <p className="label1">Shop</p>
              <p>RazerStores</p>
              <p>RazerCafe</p>
              <p>Store Location</p>
              <p>Purchase Programs</p>
              <p>Exclusives</p>
            </div>
            <div className="f-2">
              <p className="label2">Explore</p>
              <p>Technology</p>
              <p>Chroma RGB</p>
              <p>Concepts</p>
              <p>Esports</p>
              <p>Collabs</p>
            </div>
            <div className="f-3">
              <p className="label3">Support</p>
              <p>Get Help</p>
              <p>Registration & Warranty</p>
              <p>RazerStore Support</p>
              <p>Manage Razer ID</p>
              <p>Support Videos</p>
            </div>
            <div className="f-4">
              <p className="label4">Company</p>
              <p>About Us</p>
              <p>Careers</p>
              <p>Press Room</p>
              <p>zVentures</p>
              <p>Contact Us</p>
            </div>
            <div className="f-5 icons-div">
              <h3>FOR GAMERS. BY GAMERS.™</h3>
              <div className="f-icons">
                <img className="facebook" src={facebook} alt="Facebook" />
                <img className="inst" src={inst} alt="Instagram" />
                <img className="twitter" src={twitter} alt="Twitter" />
              </div>
            </div>
          </div>
          <div className="f-end">
            <div className="f-p">
              <p>Copyright © 2022 Razer Inc. All rights reserved.</p>
            </div>
            <div className="f-links">
              <a href="https://t.me/umar_rakhmonberdiev">Created by: Rakhmonberdiev</a>
              <span>|</span>
              <a href="https://it-academy.uz/" target="_blank">
                IT academy
              </a>
            </div>
          </div>
          <div className="icons-div-end">
            <h3>FOR GAMERS. BY GAMERS.™</h3>
            <div className="f-icons">
              <img className="facebook" src={facebook} alt="Facebook" />
              <img className="inst" src={inst} alt="Instagram" />
              <img className="twitter" src={twitter} alt="Twitter" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
