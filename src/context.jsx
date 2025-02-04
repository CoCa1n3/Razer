import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
  
const Context = React.createContext();
const API = "https://bob-fst-jwt.onrender.com/";

const ContextProvider = ({ children }) => {
  const [mobile, setMobile] = useState(false);
  const [notLaptop, setNotLaptop] = useState(false);
  const navigate = useNavigate();

  //register uchun ya'ni Sign Up
  const SignUp = (e) => {
    e.preventDefault();
    axios
      .post(`${API}api/sign-up/`, {
        email: e.target[0].value,
        username: e.target[1].value,
        password: e.target[2].value,
      })
      .then((res) => {
        if (res.status === 201) {
          navigate("/sign-in");
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  //login uchun ya'ni Sign In
  const LogIn = (e) => {
    e.preventDefault();
    axios
      .post(`${API}api/sign-in/`, {
        email: e.target[0].value,
        password: e.target[1].value,
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("access", response.data.token);
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  return (
    <div>
      <Context.Provider
        value={{
          SignUp,
          LogIn,
          mobile,
          setMobile,
          notLaptop,
          setNotLaptop,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};

export { Context, ContextProvider };
