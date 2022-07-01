import React from "react";
import { connect } from "react-redux/es/exports";
import "./App.css";
import { NavLink} from "react-router-dom";
const Navbar = ({state}) => {
 
  return (
    
    <div className="navbar-nav fs-5">
      <div className="nav-content">
        <NavLink className="nav-link" to="/"
        onClick={()=>state()}
        >
        Еxit
        </NavLink>
      </div>
    </div>
     
  );
};

export default connect(
  state =>({
    testStore: state
  }),/*
  dispatch=>({
    onAddCaaracters: (CardName)=>{
      dispatch({type:"ADD_CARDS", payload: CardName})
    }
  }),*/
)(Navbar);
