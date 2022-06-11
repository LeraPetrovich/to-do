import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
class Input extends Component {
  addTrack() {
    this.props.onAddTrack(this.trackInput.value);
    console.log("Add track", this.trackInput.value);
    this.trackInput.value = "";
  }
  render() {
    console.log(this.props.tracks);
    return (
      <div className="form">
        <h2 className="Register-text">Input:</h2>
        <div className="forms" 
        >
          <form className="form-name">
            <p>
              Name:{" "}
              <input
                type="text"
                ref={(input) => {
                  this.trackInput = input;
                }}
                placeholder="Name"
              />
            </p>
            <p>
              Password:{" "}
              <input
                type="text"
                ref={(input) => {
                  this.trackInput = input;
                }}
                placeholder="Password"
              />
            </p>

            <button className="button-input">
              <NavLink className="nav-link-button" to="/todo">
                Input
              </NavLink>
            </button>

            <p>if you are not registered:  <NavLink className="nav-link-input" to="/register">
              Register
            </NavLink></p>
            
          </form>
        </div>
      </div>
    );
  }
}
export default connect(
  (state) => ({
    tracks: state.tracks,
  }),
  (dispatch) => ({
    onAddTrack: (trackName) => {
      const payload = {
        id: Date.now().toString(),
        name: trackName,
      };

      dispatch({ type: "ADD_TRACK", payload });
    },
  })
)(Input);
//onClick={this.addTrack.bind(this)} в нопке
