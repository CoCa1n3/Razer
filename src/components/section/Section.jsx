import React from "react";
import "../section/section.scss";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <Link to="/store">
      <div className="sect1">
        <div className="container">
          <div className="btn-div">
            <Link to="/store">
              {" "}
              <button className="link-btn">
                <span className="st1">RAZER.COM</span> <br />
                <span className="st2">EXCLUSIVE</span>
              </button>
            </Link>
          </div>
          <h1 className="s-bigger">RAZER ENKI PRO</h1>
          <h2 className="s-big">ULTIMATE ALL-DAY COMFORT</h2>
          <div className="s-btns">
            <Link to="/store">
              <button className="sec-btn">
                Koenigsegg Edition <span className="arrow">{">"}</span>
              </button>
            </Link>
            <Link to="/store">
              <button className="sec-btn1">
                Williams Esports Edition <span className="arrow">{">"}</span>
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Section;
