import React from "react";
import { IoMdPower } from "react-icons/io";
import "./Layout.scss";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <header>
        <div className="navbar">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            BILYEO BOARD
          </Link>
          <nav>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <IoMdPower />
            </Link>
          </nav>
        </div>
      </header>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
