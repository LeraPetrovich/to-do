import "../App.css";
import React, { useState } from "react";
import { connect,useSelector } from "react-redux";
import { NavLink} from "react-router-dom";
import { addInput } from "../React/action-creator"; 
import { firestore } from "../firebase";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getDocs,collection, query, where  } from "firebase/firestore";
const Input = ({ input }) => {
  console.log(input);
  const [inputEmail, setEmail] = useState("");
  const [inputPasword, setPassword] = useState("");

  const tracks = useSelector((state) => state.tracks)
  console.log(tracks);


 //////////////////////////////////////////////////////////////
 let navigate = useNavigate();
  function userInput(){ const auth = getAuth();
  signInWithEmailAndPassword(auth, inputEmail, inputPasword).then(() => {
      navigate("../todo", { replace: true });
      const citiesRef = collection(firestore, "to-do");
      const q = query(citiesRef, where("UserID", "==", auth.lastNotifiedUid));
     // console.log(auth.lastNotifiedUid)
      async function getName(){ const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          //console.log(doc.id, " => ", doc.data());
        });}
        getName();
     
  })
  .catch(() => {
  alert('Invalid password. If you are not registered, please register');
  })

  async function gettDocs(){
    const querySnapshot = await getDocs(collection(firestore, "to-do"));
    querySnapshot.forEach((doc) => {
   //   console.log(`${doc.id} => name:${doc.data().todo}`);
    })}
    gettDocs();
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
          onClick={() => userInput()}
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
      dispatch(addInput(payload));
    },
    inputPas: (input) => {
      const payload = {
        id: Date.now().toString(),
        name: input,
        UserID: ' ',
      };
      dispatch(addInput(payload));
    },
  })
)(Input);