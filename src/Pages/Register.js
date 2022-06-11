import "../App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
class Register extends Component {
     addTrack() {
        this.props.onAddTrack(this.trackInput.value);
        console.log("Add track", this.trackInput.value);
        this.trackInput.value = "";
        alert("Your data has been saved");
      }
      render(){
        console.log(this.props.tracks);
  return (
    <body>
      <div className="form">
        <h2 className="Register-text">Register user:</h2>
        <form style={{ marginLeft: "50px", marginTop: "100px" }}>
          <p className="Name">
            Name: <input type="text" 
            ref={(input) => {
                this.trackInput = input;
              }}
              placeholder="Name"
            />
          </p>
          <p className="Name">
            Email:{" "}
            <input type="text" 
            ref={(input) => {
                this.trackInput = input;
              }}
              placeholder="Email"
            />
          </p>
          <p className="Name">
            Password: <input type="text" 
            ref={(input) => {
                this.trackInput = input;
              }}
              placeholder="Password"/>
          </p>
          <p>
            Repeat password:{" "}
            <input type="text"
            ref={(input) => {
                this.trackInput = input;
              }}
              placeholder="Repet password"/>
          </p>

          <button className="nav-link-button-registr" onClick={this.addTrack.bind(this)}>Send</button>
        </form>
      </div>
    </body>
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
)(Register);
