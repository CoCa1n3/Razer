import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./pcAside.scss";
import synapse from "../../images/synapse.jpg";
import chroma from "../../images/chroma.jpg";
import cortex from "../../images/cortex.jpg";
import thx from "../../images/thx.jpg";
import headphone from "../../images/headphone.jpg";
import stream from "../../images/stream-heard.jpg";
import win from "../../images/win.jpg";
import { Context } from "../../context";

const PCaside = () => {
  const { notLaptop, setNotLaptop } = useContext(Context);
  return (
    <>
      <div className="dark-content1">
        <h1 className="pc-h1">SOFTWARE</h1>
        <p className="pc-p">
          Providing an optimal gaming experience to over 100 million users,
          Razer's software platforms are designed to <br /> enhance the
          performance of our gear and your PC—from custom keybinds to
          personalized Chroma effects, game <br /> optimizations to immersive
          audio, and more.
        </p>
      </div>
      <div className="last-grid-pc">
        <div className="container">
          <div className="parent1 pr2">
            <div className="card1 pc-card1 gr-pc-last">
              <Link to="/">
                <img src={synapse} alt="WebCamera" />
                <div className="inside-c">
                  <h3>RAZER SYNAPSE</h3>
                  <p>
                    Maximize your unfair advantage with Razer Synapse 3, the
                    unified cloud-based hardware configuration tool and...{" "}
                  </p>
                  <button>Learn More {">"}</button>
                </div>
              </Link>
            </div>
            <div className="card2 pc-card1 gr-pc-last">
              <Link to="/">
                <img src={chroma} alt="WebCamera" />
                <div className="inside-c">
                  <h3>RAZER CHROMA™ RGB</h3>
                  <p>
                    Experience full RGB customization and deeper immersion with
                    the world’s largest lighting ecosystem and...
                  </p>
                  <button>Learn More {">"}</button>
                </div>
              </Link>
            </div>
            <div className="card3 pc-card1 gr-pc-last">
              <Link to="/">
                <img src={cortex} alt="WebCamera" />
                <div className="inside-c">
                  <h3>RAZER CORTEX</h3>
                  <p>
                    Unlock your PC’s full potential and enhance your gameplay
                    with Razer: Cortex. So let's go to buy something.{" "}
                  </p>
                  <button>Learn More {">"}</button>
                </div>
              </Link>
            </div>
            <div className="card4 pc-card1 gr-pc-last">
              <Link to="/">
                <img src={thx} alt="WebCamera" />
                <div className="inside-c">
                  <h3>THX SPATIAL AUDIO</h3>
                  <p>
                    Unlock full customization with a surround sound application
                    featuring more extensive audio calibration and...
                  </p>
                  <button>Learn More {">"}</button>
                </div>
              </Link>
            </div>
            <div className="card5 pc-card1 gr-pc-last">
              <Link to="/">
                <img src={headphone} alt="WebCamera" />
                <div className="inside-c">
                  <h3>7.1 SURROUND SOUND</h3>
                  <p>
                    Experience accurate positional sound for the competitive
                    advantage, so let's go to store and buy something and use...{" "}
                  </p>
                  <button>Learn More {">"}</button>
                </div>
              </Link>
            </div>
            <div className="card6 pc-card1 gr-pc-last">
              <Link to="/">
                <img src={stream} alt="WebCamera" />
                <div className="inside-c">
                  <h3>STREAMER COMPANION APP</h3>
                  <p>
                    Put on a show for your stream by customizing how your Seiren
                    Emote or Emote display reacts and others you can...
                  </p>
                  <button>Learn More {">"}</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="pred-footer">
          <div className="container">
            <div className="pustoyla">
              <div className="pustoy-cap"></div>
              <div className="pustoy-on">
                <h1>PLAYTIME. ANYTIME</h1>
                <h4>Play the latest games with graphics that rival reality.</h4>
                <h4>
                  DirectX 12 enables breathtaking, immersive graphics at <br />{" "}
                  high frame rates*.
                </h4>
                <img src={win} alt="Windows" />
                <p>
                  *DirectX 12 Ultimate available with supported games, graphics
                  chips, and requires the <br />
                  latest Windows 11 update with updated hardware drivers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PCaside;
