import React, { useContext } from "react";
import "../Auth/auth.scss";
import logo from "../../images/razer-ths-logo.svg";
import { Link } from "react-router-dom";
import { Context } from "../../context";

const SignUp = () => {
  const { SignUp } = useContext(Context);
  return (
    <>
      <div className="reg_parent">
        <div className="reg_child">
          <Link to="/">
            <img src={logo} alt="Razer-Logo" />
            <h1>Razer</h1>
          </Link>
          <br />
          <form onSubmit={SignUp}>
            <input required type="email" placeholder="Email" />
            <br />
            <input required type="text" placeholder="Username" />
            <br />
            <input required type="password" placeholder="Password" />
            <br />
            <button type="submit">Submit</button>
            <p>
              Have you an account? <Link to="/sign-in">Log in now</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
