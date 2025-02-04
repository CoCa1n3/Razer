import React from "react";
import { HashLink } from "react-router-hash-link";
import "./mobileHeader.scss";
import iphone from "../../images/iphone.jpg";
import android from "../../images/android.jpg";
import kishi from "../../images/kishi.jpg";

const MobileHeader = () => {
  return (
    <>
      <div className="empty-div-pc pc" id="storeHeader">
        <h5>
          {" "}
          Our Telegram channel. You can see all orders here.{" "}
          <a target="_blank" href="https://t.me/umar_rakhmonberdiev">
            <span className="bor-b"> Telegram {">"}</span>
          </a>{" "}
        </h5>
      </div>
      <div className="mobile-content">
        <h1>ENGINEERED FOR THE GAME, DESIGNED FOR LIFE</h1>
        <p>
          This is freedom of play, redefined. Our mobile gaming and lifestyle
          audio products are crafted to seamlessly integrate <br /> gaming into
          every aspect of your life.
        </p>
      </div>

      <div className="mobile-head">
        <div className="container">
          <div className="mobile-txt">
            <h2>RAZER EDGE</h2>
            <p>The Ultimate Android Gaming Handheld</p>
            <HashLink to="/store#mobile">Learn More {">"}</HashLink>
          </div>
        </div>
      </div>
      <div className="m-gray-grid">
        <div className="container">
          <div className="mobile-grid">
            <div className="m-card1">
              <img src={iphone} alt="RAZER KISHI V2 FOR IPHONE" />
              <h2>RAZER KISHI V2 FOR IPHONE</h2>
              <p>Universal Mobile Gaming Controller for iPhone</p>
              <HashLink to="/store#mobile">Learn More {">"}</HashLink>
            </div>
            <div className="m-card1">
              <img src={android} alt="RAZER KISHI V2 FOR IPHONE" />
              <h2>RAZER KISHI V2 FOR ANDROID</h2>
              <p>Universal Mobile Gaming Controller for Android</p>
              <HashLink to="/store#mobile">Learn More {">"}</HashLink>
            </div>
            <div className="m-card1">
              <img src={kishi} alt="RAZER KISHI V2 FOR IPHONE" />
              <h2>RAZER KISHI</h2>
              <p>
                Make your move with our award-winning universal mobile
                controller that fits most smartphone devices, designed to bring
                console-level control and comfort to your on-the-go gaming.
              </p>
              <HashLink to="/store#mobile">Learn More {">"}</HashLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
