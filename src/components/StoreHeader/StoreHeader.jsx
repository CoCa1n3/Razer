import React from "react";
import "./storeHeader.scss";
import { HashLink } from "react-router-hash-link";
import Laptop from "../../images/Laptop.png";
import Mice from "../../images/Mice.png";
import Keyboards from "../../images/Keyboards.png";
import Headsets from "../../images/Headsets.png";
import Chairs from "../../images/Chairs.png";
import Console from "../../images/console.png";
import Gear from "../../images/Gear.png";
import Stream from "../../images/stream.png";
import Mobile from "../../images/c-mobile.png";
import findIcon from "../../images/findIcon.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const StoreHeader = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="empty-div home" id="storeHeader">
        <h5>
          {" "}
          Our Telegram channel. You can see all orders here.{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://t.me/umar_rakhmonberdiev"
          >
            <span className="bor-b"> Telegram {">"}</span>
          </a>{" "}
        </h5>
      </div>
      <div className="navbar-new">
        <div className="container">
          <div className="store-categories">
            <div className="column">
              <HashLink smooth to="/store#laptop">
                <img src={Laptop} alt="Laptop" />
                <h4 className="c-h4">Laptops</h4>
              </HashLink>
            </div>
            <div className="column">
              <HashLink smooth to="/store#mice">
                <img src={Mice} alt="Mice" />
                <h4 className="c-h4">Mice</h4>
              </HashLink>
            </div>
            <div className="column">
              <HashLink smooth to="/store#keyboards">
                <img src={Keyboards} alt="Keyboards" />
                <h4 className="c-h4">Keyboards</h4>
              </HashLink>
            </div>
            <div className="column">
              <HashLink smooth to="/store#headsets">
                <img src={Headsets} alt="Headsets" />
                <h4 className="c-h4">Headsets</h4>
              </HashLink>
            </div>
            <div className="column">
              <HashLink smooth to="/store#streaming">
                <img src={Stream} alt="Streaming" />
                <h4 className="c-h4">Streaming</h4>
              </HashLink>
            </div>
            <div className="column">
              <HashLink smooth to="/store#chairs">
                <img src={Chairs} alt="Chairs" />
                <h4 className="c-h4">Chairs</h4>
              </HashLink>
            </div>
            <div className="column">
              <HashLink smooth to="/store#console">
                <img src={Console} alt="Console" />
                <h4 className="c-h4">Console</h4>
              </HashLink>
            </div>
            <div className="column">
              <HashLink smooth to="/store#mobile">
                <img src={Mobile} alt="Mobile" />
                <h4 className="c-h4">Mobile</h4>
              </HashLink>
            </div>
            <div className="column">
              <HashLink smooth to="/store#gear">
                <img src={Gear} alt="Gear" />
                <h4 className="c-h4">Gear</h4>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="containerrr">
          <Slider {...settings} className="slick-slider">
            <div className="column">
              <HashLink smooth to="/store#laptop">
                <img src={Laptop} alt="Laptop" />
                <h4 className="c-h4">Laptop</h4>
              </HashLink>
            </div>
            <div className="column">
              <HashLink smooth to="/store#mice">
                <img src={Mice} alt="Mice" />
                <h4 className="c-h4">Mice</h4>
              </HashLink>
            </div>
            <div className="column">
              <HashLink smooth to="/store#keyboards">
                <img src={Keyboards} alt="Keyboards" />
                <h4 className="c-h4">Keyboards</h4>
              </HashLink>
            </div>
            <div className="column">
              <HashLink smooth to="/store#headsets">
                <img src={Headsets} alt="Headsets" />
                <h4 className="c-h4">Headsets</h4>
              </HashLink>
            </div>
            <div className="column">
              <HashLink smooth to="/store#streaming">
                <img src={Stream} alt="Streaming" />
                <h4 className="c-h4">Streaming</h4>
              </HashLink>
            </div>
            <div className="column">
              <HashLink smooth to="/store#chairs">
                <img src={Chairs} alt="Chairs" />
                <h4 className="c-h4">Chairs</h4>
              </HashLink>
            </div>
            <div className="column">
              <HashLink smooth to="/store#console">
                <img src={Console} alt="Console" />
                <h4 className="c-h4">Console</h4>
              </HashLink>
            </div>
            <div className="column">
              <HashLink smooth to="/store#mobile">
                <img src={Mobile} alt="Mobile" />
                <h4 className="c-h4">Mobile</h4>
              </HashLink>
            </div>
            <div className="column">
              <HashLink smooth to="/store#gear">
                <img src={Gear} alt="Gear" />
                <h4 className="c-h4">Gear</h4>
              </HashLink>
            </div>
          </Slider>
        </div>
        <div className="near-you">
          <h1>THE LATEST AND GREATEST GAMING GEAR</h1>
          <a className="find-r" href="https://www.razer.com/razerstores">
            <img src={findIcon} alt="Find-icon" />
            <p>
              Find a RazerStore <br /> near you <span>{">"}</span>
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default StoreHeader;

//1.mice+ 2.laptop+ 3.keyboards 4.headsets 5.chairs+ 6.gear+
