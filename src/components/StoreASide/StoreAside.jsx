import React from "react";
import "./storeAside.scss";
import flash from "../../images/flash.svg";
import sumka from "../../images/sumka.svg";
import star from "../../images/star.svg";
import play from "../../images/play.svg";

const StoreAside = () => {
  return (
    <>
      <h1 className="store-label">WHY BUY FROM RAZER.COM</h1>
      <div className="container">
        <div className="store-aside">
          <div className="flash">
            <img src={flash} alt="Flash" />
            <h3>Get First Dibs</h3>
            <p>
              Razer.com is the only place where you can buy our most anticipated
              Razer gear immediately upon release.
            </p>
          </div>
          <div className="sumka">
            <img src={sumka} alt="Shop-Cart" />
            <h3>The Largest Array Of Razer Gear</h3>
            <p>
              As Razer’s official online store, we hold a massive collection of
              products that can’t be matched anywhere else.
            </p>
          </div>
          <div className="star">
            <img src={star} alt="Star" />
            <h3>Exclusive Razer Gear And Swag</h3>
            <p>
              Get access to limited edition Razer gear that’s only available on
              Razer.com.
            </p>
          </div>
          <div className="play">
            <img src={play} alt="Play" />
            <h3>Play Now, Pay Later</h3>
            <p>
              With our 0% installment plan, spend more time gaming with your
              sweet new gear and less time fussing over payment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreAside;
