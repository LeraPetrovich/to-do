import "../App.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink} from "react-router-dom";
const Input = ({ input, inputToDo }) => {
  console.log(input);
  const [inputName, setName] = useState("");
  const [inputPasword, setPassword] = useState("");

  return (
    <div
      style={{
        margin: "0 auto",
        height: "500px",
        width: "700px",
        marginLeft: "400px",
      }}
    >
      <h2 className="Register-text" style={{ textAlign: "center" }}>
        Input:
      </h2>
      <div style={{ marginLeft: "150px", marginTop: "160px" }}>
        <p className="Name">
          Name:{" "}
          <input
            type="text"
            value={inputName}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
          />
        </p>
        <p className="Name">
          Password:{" "}
          <input
            type="text"
            id="password"
            value={inputPasword}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
        </p>
        <button
          className="nav-link-button-registr"
          onClick={() => inputToDo(inputName,inputPasword)}
        >
          Send
        </button>
        <div>
          <p>
          If you are not registered:
          <NavLink className="nav-link" to="/register">
          Registration
        </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    input: state.input,
  }),
  (dispatch) => ({
    inputToDo: (input1, input2) => {
      const payload = {
        id: Date.now().toString(),
        name: input1,
        pasword:input2,
      };
      dispatch({ type: "ADD_INPUT", payload });
    },
    inputPas: (input) => {
      const payload = {
        id: Date.now().toString(),
        name: input,
      };
      dispatch({ type: "ADD_INPUT", payload });
    },
  })
)(Input);
