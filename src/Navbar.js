import React from "react";
import "./App.css";
import { NavLink} from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar-nav fs-5">
      <div className="nav-content">
        <NavLink className="nav-link" to="/todo">
          To Do List
        </NavLink>
        <NavLink className="nav-link" to="/register">
          Register
        </NavLink>
        <NavLink className="nav-link" to="/">
          Input
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
