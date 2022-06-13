import "../App.css";
import React, { useState } from "react";
import { connect } from "react-redux";
const Register = ({ todo, onAddToDo }) => {
  console.log(todo);
  const [inputName, setName] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [inputPasword, setPassword] = useState("");

  return (
    <div className="form">
      <h2 className="Register-text">Registration user:</h2>
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
        Email:{" "}
        <input
          type="text"
          value={inputEmail}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
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
        onClick={() => onAddToDo(inputName, inputEmail, inputPasword)}
      >
        Send
      </button>
    </div>
  );
};

export default connect(
  (state) => ({
    todo: state.todo,
  }),
  (dispatch) => ({
    onAddToDo: (name, email,password) => {
      const payload = {
        id: Date.now().toString(),
        name: name,
        email: email,
        password:password
      };

      dispatch({ type: "ADD_TODO", payload });
    },
  })
)(Register);
