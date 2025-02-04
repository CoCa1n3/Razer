import React from "react";
import pnf from "./404.gif";
import "./404.scss";

const PageNotFound = () => {
  return (
    <div className="pnf-parent">
      <img className="pnf" src={pnf} alt="PageNotFound" />
    </div>
  );
};

export default PageNotFound;
