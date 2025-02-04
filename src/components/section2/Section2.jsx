import React from "react";
import "../section2/section2.scss";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <Link to="/store">
      <div className="aside">
        <div className="container">
          <h1 className="s2-bigger">RAZER DEATHSTALKER V2 PRO TENKEYLESS</h1>
          <h2 className="s2-big">
            LOW-PROFILE ERGONOMICS. HIGH-PERFORMANCE WIRELESS.
          </h2>
          <div className="flexbox">
            <Link to="/store">
              <button>
                Learn More <span className="arrow">{">"}</span>
              </button>
            </Link>
            <Link to="/store">
              <button>
                Buy <span className="arrow">{">"}</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Section2;
