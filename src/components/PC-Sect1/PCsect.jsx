import React from "react";
import { HashLink } from "react-router-hash-link";
import "./pcsect.scss";

const PCsect = () => {
  return (
    <>
      <div className="PC-Sect">
        <div className="dark-content">
          <div className="texts">
            <h1 className="pc-h1 pcs-h1">PERIPHERALS</h1>
            <p className="pc-p pcs-p">
              The most powerful rigs mean nothing without the high-performance
              gear to match. Understand what it means to <br /> wield the unfair
              advantage as you experience industry-leading levels of precision,
              control, and immersion.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="two-div">
            <div className="pcs-left">
              <h2>MICE</h2>
              <HashLink to="/store#mice">
                <button>Learn More {">"}</button>
              </HashLink>
            </div>
            <div className="pcs-right">
              <h2>MOUSE MATS</h2>
              <HashLink to="/store#gear">
                <button>Learn More {">"}</button>
              </HashLink>
            </div>
            <div className="pcs-left1">
              <h2>KEYBOARDS</h2>
              <HashLink to="/store#keyboards">
                <button>Learn More {">"}</button>
              </HashLink>
            </div>
            <div className="pcs-right1">
              <h2>AUDIO</h2>
              <HashLink to="/store#steaming">
                <button>Learn More {">"}</button>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PCsect;
