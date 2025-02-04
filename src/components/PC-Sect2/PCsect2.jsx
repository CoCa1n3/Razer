import React from "react";
import "./pcSect2.scss";
import { HashLink } from "react-router-hash-link";
import webcamera from "../../images/webcamera.jpg";
import microphone from "../../images/microphone.jpg";
import card from "../../images/card.jpg";

const PCsect2 = () => {
  return (
    <>
      <div className="PC-sect2-bg">
        <div className="pc-sect2-contents">
          <h1>COMPLETE YOUR SETUP</h1>
          <p>A Color For Every Style</p>
          <HashLink to="/store#headsets">
            <button>Learn More {">"}</button>
          </HashLink>
        </div>
      </div>
      <div className="dark-content1">
        <h1 className="pc-h1">STREAMING</h1>
        <p className="pc-p">
          Whether you’re finding your footing, raking in the views, or somewhere
          in between, we’ve got gear catered to the full <br /> spectrum of
          streamers, so you’ll always have the quality and clarity you need to
          keep your audience engaged <br /> and entertained.
        </p>
      </div>
      <div className="pc-bg">
        <div className="container">
          <div className="parent1">
            <div className="card1 pc-card1">
              <HashLink to="/store#streaming">
                <img src={webcamera} alt="WebCamera" />
                <div className="inside-c">
                  <h3>WEBCAMS</h3>
                  <p>Stunning visual fidelity for streaming and productivity</p>
                  <button>Learn More {">"}</button>
                </div>
              </HashLink>
            </div>
            <div className="card2 pc-card1">
              <HashLink to="/store#streaming">
                <img src={microphone} alt="MircoPhone" />
                <div className="inside-c">
                  <h3>MICROPHONES</h3>
                  <p>
                    Engineered for crystal-clear voice pickup and help you ...
                  </p>
                  <button>Learn More {">"}</button>
                </div>
              </HashLink>
            </div>
            <div className="card3 pc-card1">
              <HashLink to="/store#laptop">
                <img src={card} alt="Card" />
                <div className="inside-c">
                  <h3>CAPTURE CARD & OTHERS</h3>
                  <p>For a professional streaming advantage</p>
                  <button>Learn More {">"}</button>
                </div>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PCsect2;
