import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Pc-header.scss";
import laptop from "../../images/razer-laptop.jpg";
import comp from "../../images/component.jpg";
import accessorie from "../../images/accessorie.jpg";
import mice from "../../images/mice.jpg";
import headset from "../../images/headsets.jpg";
import chair from "../../images/chair-pc.jpg";

const PcHeader = () => {
  return (
    <>
      <div className="header-pc">
        <div className="container">
          <div className="category-div">
            <div className="category-select">
              <select>
                <option value="1">PC</option>
                <option value="2">Laptops</option>
                <option value="3">Monitors</option>
                <option value="4">Mice</option>
                <option value="5">Mats</option>
                <option value="6">Keyboards</option>
                <option value="7">Headsets</option>
                <option value="8">Speakers</option>
                <option value="9">Productivity</option>
                <option value="10">Chairs</option>
                <option value="11">Software</option>
              </select>
            </div>
            <div className="category-links">
              <HashLink to="/store#laptop">Laptops</HashLink>
              <HashLink to="/store#laptop">Monitors</HashLink>
              <HashLink to="/store#mice">Mice</HashLink>
              <HashLink to="/store#gear">Mats</HashLink>
              <HashLink to="/store#keyboards">Keyboards</HashLink>
              <HashLink to="/store#headsets">Headsets</HashLink>
              <HashLink to="/store#streaming">Streaming</HashLink>
              <HashLink to="/store#gear">Productivity</HashLink>
              <HashLink to="/store#chairs">Chairs</HashLink>
              <HashLink to="/store#streaming">Software</HashLink>
            </div>
          </div>
        </div>
        <div className="empty-div-pc pc" id="storeHeader">
          <h5>
            {" "}
            Our Telegram channel. You can see all orders here.{" "}
            <a target="_blank" href="https://t.me/umar_rakhmonberdiev">
              <span className="bor-b"> Telegram {">"}</span>
            </a>{" "}
          </h5>
        </div>
      </div>
      <div className="pc-head">
        <div className="contents">
          <h1 className="pc-h1">LAPTOPS & DESKTOPS</h1>
          <p className="pc-p">
            Razer systems are crafted to provide the ultimate performance for
            gaming and work. Enjoy desktop power made <br /> mobile with our
            gaming and productivity laptops, or go all-out for your build as you
            assemble the most powerful <br /> aRGB Chroma powered battlestation.
          </p>
        </div>
      </div>
      <div className="pc-bg">
        <div className="container">
          <div className="parent1">
            <div className="card-1 pc-card1">
              <HashLink to="/store#headsets">
                <img src={headset} alt="HeadSet" />
                <div className="inside-c">
                  <h3>HEADSETS</h3>
                  <p>
                    Tuned for gaming, lifestyle, or a perfect mix of both and
                    also...
                  </p>
                  <button>Learn More {">"}</button>
                </div>
              </HashLink>
            </div>
            <div className="card0 pc-card1">
              <HashLink to="/store#mice">
                <img src={mice} alt="Mice" />
                <div className="inside-c">
                  <h3>MICE</h3>
                  <p>
                    Pixel-perfect precision for any hand size and grip style
                    and...
                  </p>
                  <button>Learn More {">"}</button>
                </div>
              </HashLink>
            </div>
            <div className="card1 pc-card1">
              <HashLink to="/store#laptop">
                <img src={laptop} alt="Razer Blade 15" />
                <div className="inside-c">
                  <h3>LAPTOPS</h3>
                  <p>
                    Sleek high-performance gaming laptops. So you can buy ...
                  </p>
                  <button>Learn More {">"}</button>
                </div>
              </HashLink>
            </div>
            <div className="card2 pc-card1">
              <HashLink to="/store#laptop">
                <img src={comp} alt="Component" />
                <div className="inside-c">
                  <h3>DESKTOPS & COMPONENTS</h3>
                  <p>Engineered for enthusiasts and designed for performance</p>
                  <button>Learn More {">"}</button>
                </div>
              </HashLink>
            </div>
            <div className="card3 pc-card1">
              <HashLink to="/store#gear">
                <img src={accessorie} alt="Accessories" />
                <div className="inside-c">
                  <h3>ACCESSORIES</h3>
                  <p>
                    Crafting the perfect gaming experience. So you can buy and
                    show ...
                  </p>
                  <button>Learn More {">"}</button>
                </div>
              </HashLink>
            </div>
            <div className="card3 pc-card1">
              <HashLink to="/store#chairs">
                <img src={chair} alt="Chair" />
                <div className="inside-c">
                  <h3>CHAIRS</h3>
                  <p>
                    Perfecting the science of comfort and support and others
                    from ...
                  </p>
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

export default PcHeader;
