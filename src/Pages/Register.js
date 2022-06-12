import "../App.css";
import React from "react";
import { connect } from "react-redux";
const Register = ({tracks, onAddTrack, trackInput1,trackInput2,trackInput3,trackInput4 }) => {
    function addTrack() {
        //onAddTrack(trackInput1,trackInput2,trackInput3,trackInput4);
        console.log("Add track", trackInput1,trackInput2,trackInput3,trackInput4);
       //trackInput = "";
        //alert("Your data has been saved");
      }
        console.log(tracks);
  return (
      <div className="form">
        <h2 className="Register-text">Register user:</h2>
        <form style={{ marginLeft: "50px", marginTop: "100px" }}>
          <p className="Name">
            Name: <input type="text" 
            ref={(input) => {
                trackInput1 = input;
              }}
              placeholder="Name"
            />
          </p>
          <p className="Name">
            Email:{" "}
            <input type="text" 
            ref={(input) => {
                trackInput2 = input;
              }}
              placeholder="Email"
            />
          </p>
          <p className="Name">
            Password: <input type="text" 
            ref={(input) => {
               trackInput3 = input;
              }}
              placeholder="Password"/>
          </p>
          <p>
            Repeat password:{" "}
            <input type="text"
            ref={(input) => {
                trackInput4 = input;
              }}
              placeholder="Repet password"/>
          </p>

          <button className="nav-link-button-registr" onClick={addTrack()}>Send</button>
        </form>
      </div>
  );
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
