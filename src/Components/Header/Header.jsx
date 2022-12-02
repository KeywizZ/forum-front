import React from "react";

import { AiOutlineMenu } from "react-icons/ai";
import "./Header.css";
import Toolbar from "./Toolbar";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <h1>Solera forum</h1>
      </div>
      <Toolbar />
      <div className="menu-container">
        <AiOutlineMenu />{/* TODO: Make this show the toolbar as menu when clicked */}
      </div>
    </div>
  );
};

export default Header;
