import React from "react";
import "./Navbar.scss";
import DateTime from "./DateTime";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src={`${import.meta.env.BASE_URL}nav-icon/apple.svg`} alt="" />
        </div>

        <div className="nav-item">
            <p>Manoj Kumar</p>
        </div>
        <div className="nav-item">
            <p>File</p>
        </div>
        <div className="nav-item">
            <p>Window</p>
        </div>
        <div className="nav-item">
            <p>Terminal</p>
        </div>
      </div>

      <div className="right">
        <div className="nav-icon">
            <img src={`${import.meta.env.BASE_URL}nav-icon/wifi.svg`} alt="" />
        </div>
        <div className="nav-item">
            <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
