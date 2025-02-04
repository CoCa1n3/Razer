import React, { useEffect, useState } from "react";
import logo from "../images/razer-ths-logo.svg";
import { useNavigate } from "react-router-dom";

const AdminPassword = () => {
  useEffect(() => {
    document.title = "Password | Razer.com";
  }, []);

  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const token = "RazerComTokenForAdmin";

  return (
    <>
      <div className="password-admin">
        <div className="admin-box">
          <img src={logo} alt="Razer-logo" />
          <input
            value={pass}
            type="password"
            placeholder="Password"
            maxLength={8}
            onChange={(e) => setPass(e.target.value)}
          />
          {pass === "razercom" ? (
            <h3 id="correct">Razer admin password</h3>
          ) : (
            <h3 id="incorrect">Password is not written or is incorrect</h3>
          )}
          {pass === "razercom" ? (
            <button
              onClick={() => {
                navigate("/adminPrivateRazer");
                localStorage.setItem("token", token);
              }}
              disabled={!pass}
            >
              Submit
            </button>
          ) : (
            <button onClick={() => navigate("/adminPassword")} disabled={!pass}>
              Submit
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminPassword;
