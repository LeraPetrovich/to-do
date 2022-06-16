import "../App.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink} from "react-router-dom";
import { addInput } from "../React/action-creator";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
//import  {getAuth} from 'firebase/auth'
import { firestore } from "../firebase";
const Input = ({ input, inputToDo }) => {
  console.log(input);
  const [inputName, setName] = useState("");
  const [inputPasword, setPassword] = useState("");


  //////////////////////////////////////////////////////////////
  async function dataBase(){
    const docRef = await addDoc(collection(firestore, "users"), {
      name: inputName,
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
 /*
 getAuth()
  .importUsers(
    [
      {
        uid: 'some-uid',
        email: 'user@example.com',
        // Must be provided in a byte buffer.
        passwordHash: Buffer.from('password-hash'),
        // Must be provided in a byte buffer.
        passwordSalt: Buffer.from('salt'),
      },
    ],
    {
      hash: {
        algorithm: 'STANDARD_SCRYPT',
        memoryCost: 1024,
        parallelization: 16,
        blockSize: 8,
        derivedKeyLength: 64,
      },
    }
  )
  .then((results) => {
    results.errors.forEach((indexedError) => {
      console.log(`Error importing user ${indexedError.index}`);
    });
  })
  .catch((error) => {
    console.log('Error importing users :', error);
  });
*/
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

//import '../firebase'
//import firebase from "../firebase";
/*addBook = event => {
    event.preventDefault()
    firestore.collection("to-do").add({
      name: inputName,
      password: inputPasword
    })
  
   // this.setState({ name: "", password: ""})
  }*/