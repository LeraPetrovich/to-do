import React from "react";
import "./App.css";
import { NavLink} from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar-nav fs-5">
      <div className="nav-content">
        <NavLink className="nav-link" to="/">
        Еxit
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
