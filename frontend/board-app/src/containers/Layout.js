import React from "react";
import { IoMdPower } from "react-icons/io";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <header>
        <div className="navbar">
          BILYEO BOARD
          <nav>
            <IoMdPower />
          </nav>
        </div>
      </header>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
