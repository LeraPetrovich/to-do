import "../App.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink} from "react-router-dom";
import { addInput } from "../React/action-creator";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { firestore } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Input = ({ input, inputToDo }) => {
  console.log(input);
  const [inputEmail, setEmail] = useState("");
  const [inputPasword, setPassword] = useState("");


  //////////////////////////////////////////////////////////////
  async function dataBase(){
    const docRef = await addDoc(collection(firestore, "users"), {
      emale: inputEmail,
      password: inputPasword,
    });
    console.log("Document written with ID: ", docRef.id);
}
  /////////////////////////////////////////////////////////////
  async function gettDocs(){
  const querySnapshot = await getDocs(collection(firestore, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => name:${doc.data().name}, password:${doc.data().password}`);
  })}
 
 //////////////////////////////////////////////////////////////
 let navigate = useNavigate();
 function userInput(){ const auth = getAuth();
  signInWithEmailAndPassword(auth, inputEmail, inputPasword).then(() => {
      navigate("../todo", { replace: true });
  })
  .catch(() => {
  alert('Invalid password. If you are not registered, please register');
  })
}
 //////////////////////////////////////////////////////////////
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
          onClick={() => inputToDo(inputEmail,inputPasword)}
        >
          Send
        </button>
        <button
          className="nav-link-button-registr"
          onClick={() => dataBase()}
        >
          Send to dataBase
        </button>
        <button
          className="nav-link-button-registr"
          onClick={() => gettDocs()}
        >
          Get 
        </button>
        <button
          className="nav-link-button-registr"
          onClick={() => userInput()}
        >
         UserInp
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
      dispatch(addInput(payload));
    },
    inputPas: (input) => {
      const payload = {
        id: Date.now().toString(),
        name: input,
        userId: Date.now().toString(),
      };
      dispatch(addInput(payload));
    },
  })
)(Input);