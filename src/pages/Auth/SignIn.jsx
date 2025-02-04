import React from "react";
import "../Auth/auth.scss";
import logo from "../../images/razer-ths-logo.svg";
import { useContext } from "react";
import { Context } from "../../context";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { LogIn } = useContext(Context);
  return (
    <>
      <div className="reg_parent">
        <div className="reg_child">
          <Link to="/">
            <img src={logo} alt="Razer-Logo" />
            <h1>Razer</h1>
          </Link>

          <br />
          <form onSubmit={LogIn}>
            <input required type="email" placeholder="Email" />
            <br />
            <input required type="password" placeholder="Password" />
            <br />
            <button type="submit">Submit</button>
            <p>
              {" "}
              Dont have an account? <Link to="/sign-up">Sign up now</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
