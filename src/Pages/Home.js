import React, { Component } from "react";
import { connect } from "react-redux";
//import * as pastState from './reducers/past-state';
class App extends Component {
  addTrack() {
    this.props.onAddTrack(this.trackInput.value);
    console.log("Add track", this.trackInput.value);
    this.trackInput.value = "";
  }
  findTrack() {
    console.log("find track", this.serchINPUT.value);
    this.props.onFindTrack(this.serchINPUT.value);
  }

  deleteTrack(event) {
    /*if (event.target.dataset.delete === event.target.id) {
      return;
    }

    this.item = event.target.closest('this.item');
    this.item.remove();*/
    document.getElementById("worcks").remove();

    //console.log("delete track", this.trackInput.value);
    // this.props.ondeleteTrack(this.trackInput.value);
  }

  /*
  pastState = (state = [], action) => {
    switch (action.type) {
      case "RESET_TYPE_ID":
        return { ...state, type_id: null };
      default:
        return state;
    }
  };*/

  checkFluency() {
    var checkbox = document.getElementById("fluency");
    if (checkbox.checked === true) {
      document.getElementById("worcks").style.textDecorationLine =
        "line-through";
    } else {
      document.getElementById("worcks").style.textDecorationLine = "none";
    }
  }

  render() {
    console.log(this.props.tracks);
    return (
      <div style={{ backgroundColor: "cadetblue" }}>
        <div style={{ backgroundColor: "cadetblue" }}>
          <h1
            style={{
              color: "red",
              margin: "0px 0px 0px 550px",
              fontSize: "90px",
              backgroundColor: "cadetblue",
            }}
          >
            {" "}
            To Do List
          </h1>
        </div>

        <div style={{ backgroundColor: "cadetblue" }}>
          <input
            type="text"
            style={{
              height: "35px",
              width: "500px",
              margin: "20px 0px 0px 500px",
            }}
            ref={(input) => {
              this.trackInput = input;
            }}
            placeholder="To  do..."
          />
          <button
            style={{
              border: "0",
              background: "green",
              color: "white",
              height: "25px",
              borderRadius: "10px",
            }}
            onClick={this.addTrack.bind(this)}
          >
            Add To Do
          </button>

          <ul
            className="list"
            style={{
              border: "2px solid rgb(241, 237, 237)",
              width: "700px",
              height: "700px",
              margin: "20px 0px 0px 400px",
              background: "rgb(241, 237, 237)",
            }}
          >
            {this.props.tracks.map((track, index) => (
              <ol style={{ fontSize: "26px" }} key={index} id="worcks">
                {track.name}
                <input
                  id="fluency"
                  type="checkbox"
                  onClick={this.checkFluency.bind(this)}
                  style={{
                    borderBlockColor: "#0b76ef",
                    backgroundColor: "#0b76ef",
                  }}
                  key={index}
                />
                <button
                  id="delite"
                  style={{
                    border: "0",
                    background: "black",
                    color: "white",
                    height: "25px",
                    borderRadius: "10px",
                  }}
                  onClick={this.deleteTrack.bind(this)}
                >
                  DELETE
                </button>
              </ol>
            ))}
          </ul>
        </div>
        <div className="Find" style={{ margin: "-900px 0px 0px 1200px" }}>
          <input
            type="text"
            ref={(input) => {
              this.serchINPUT = input;
            }}
            placeholder="Find"
          />
          <button
            onClick={this.findTrack.bind(this)}
            style={{
              border: "0",
              background: "lightseagreen",
              color: "white",
              height: "25px",
              borderRadius: "10px",
            }}
          >
            Find To Do
          </button>
          <ol className="list2">
            {this.props.tracks
              .filter((track) =>
                track.name.includes(this.props.tracks.filtertracks)
              )
              .map((track, index) => (
                <li key={index}>{track.name}</li>
              ))}
          </ol>
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
    onFindTrack: (name) => {
      dispatch({ type: "FIND_TRACK", payload: name });
    },

    ondeleteTrack: (CaracterName) => {
      dispatch({ type: "DELETE_TRACK", payload: CaracterName });
    },
  })
)(App);
