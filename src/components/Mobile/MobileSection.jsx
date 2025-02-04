import React from "react";
import "./mobileHeader.scss";
import card1 from "../../images/m-case.jpg";
import card2 from "../../images/m-wireless.jpg";
import card3 from "../../images/m-cooler.png";
import { HashLink } from "react-router-hash-link";

const MobileSection = () => {
  return (
    <>
      <div className="mobile-sect">
        <div className="container">
          <div className="m-sect-content">
            <h1>GO THE EXTRA MILE</h1>
            <p>
              When you’re filling those few minutes in line at the coffee shop
              or commuting to work with a quick game or listening to that banger
              on repeat, Razer has the accessory that lets fellow gamers know
              they’re among their own.
            </p>
            <HashLink to="/store#mobile">Learn More {">"}</HashLink>
          </div>
        </div>
      </div>
      <div className="mobile-aside">
        <div className="container">
          <div className="mobile-grid">
            <div className="m-card1">
              <img src={card1} alt="" />
              <h2>RAZER ARCTECH CASES</h2>
              <p>
                Protect your investment while experiencing better device
                performance and improved phone cooling with a Thermaphene
                Performance layer for maximum heat dissipation.
              </p>
              <HashLink to="/store#mobile">Learn More {">"}</HashLink>
            </div>
            <div className="m-card1">
              <img src={card2} alt="" />
              <h2>RAZER HAMMERHEAD TRUE WIRELESS PRO</h2>
              <p>
                Take your audio immersion to new heights with THX® Certified
                true wireless earbuds that deliver breathtaking audio quality
                and advanced active noise cancellation.
              </p>
              <HashLink to="/store#mobile">Learn More {">"}</HashLink>
            </div>
            <div className="m-card1">
              <img src={card3} alt="" />
              <h2>RAZER PHONE COOLER CHROMA</h2>
              <p>Smartphone Cooling Fan with Razer Chroma™ RGB</p>
              <HashLink to="/store#mobile">Learn More {">"}</HashLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSection;
