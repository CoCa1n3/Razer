import React from "react";
import "../GridSection/gridSect.scss";
import { Link } from "react-router-dom";

const GridSect = () => {
  return (
    <div id="row">
      <div className="left">
        <div className="btn-grid">
          <h1 className="g-bigger"> NEW RAZER BLADE 14</h1>
          <h3 className="g-big">ULTRA QUARTZ. ULTRA POWERFUL.</h3>
        </div>
        <div className="gridbox">
          <Link to="/store">
            <button>
              Learn More <span>{">"}</span>
            </button>
          </Link>
          <Link to="/store">
            <button>
              Buy <span>{">"}</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="right">
        <h1 className="g-right">RAZER BLACKSHARK V2 X USB</h1>
        <h3 className="r-big">THE SOUND OF ESPORTS</h3>
        <Link to="/store">
          <button>
            Learn More <span>{">"}</span>
          </button>
        </Link>
      </div>
      <div className="left1">
        <div className="left-btn-div">
          <Link to="/store">
            <button>
              <span className="st3">RAZER.COM</span> <br />
              <span className="st4">EXCLUSIVE</span>
            </button>
          </Link>
        </div>
        <h1 className="left-h1">RAZER STRIDER CHROMA</h1>
        <h3 className="left-h2">OUTSHINE ALL OTHERS</h3>
        <div className="left-gridbox">
          <Link to="/store">
            <button className="link-btn1">
              Learn More <span>{">"}</span>
            </button>
          </Link>
          <Link to="/store">
            <button>
              Buy <span>{">"}</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="right1">
        <div className="right-h">
          <h1>NEW RAZER BLADE 15</h1>
          <h3>POWER. PERFORMANCE. PERFECTION.</h3>
        </div>
        <div className="right-gridbox">
          <Link to="/store">
            <button>
              Learn More <span>{">"}</span>
            </button>
          </Link>
          <Link to="/store">
            <button>
              Buy <span>{">"}</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="left2">
        <div className="left2-h">
          <h1 className="left2-h1">BE IN A CLASS OF YOUR OWN</h1>
          <h3 className="left2-h2">BACK-TO-SCHOOL SPECIALS</h3>
          <Link to="/store">
            <button className="left2-btn">
              Shop Exclusive Deals <span className="arrow">{">"}</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="right2">
        <div className="right2-h">
          <h1 className="right2-h1">RAZER STREAM CONTROLLER</h1>
          <h3 className="right2-h2">INSTANT CONTROL. INFINITE CREATIVITY.</h3>
        </div>
        <div className="right2-gridbox">
          <Link to="/store">
            <button>
              Learn More <span>{">"}</span>
            </button>
          </Link>
          <Link to="/store">
            <button>
              Buy <span>{">"}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GridSect;
