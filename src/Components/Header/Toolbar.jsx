import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Toolbar = () => {

  return (
    <nav className="toolbar">
      <div className="toolbar-list">
          <Link to={"/home"}>Home</Link>
          <Link to={"/news"}>News</Link>
          <Link to={"/rules"}>Rules</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/help"}>Help</Link>
      </div>
    </nav>
  );
};

export default Toolbar;
