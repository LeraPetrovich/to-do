import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import { addTrack } from "../React/action-creator";
import { findTrack } from "../React/action-creator";
import {collection, where, getDocs,addDoc, query, deleteDoc } from "firebase/firestore";
import { auth, firestore } from "../firebase";

const Home = ({ tracks,addTodos }) => {

  const [inputName, setName] = useState("");
///////////////////////////////////////////////////
useEffect(() => {
  async function findName(){
    const citiesRef = collection(firestore, "to-do");
    const q = query(citiesRef, where("UserID", "==", auth.lastNotifiedUid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data().UserID);
  addTodos(doc.data().todo);
    });
  
    }
    findName();
}, []);
 //////////////////////////////////////////////////////////////
 const addTodoBD = async () => {
  const docRef = await addDoc(collection(firestore, "to-do"), {
    todo:inputName,
    UserID: auth.lastNotifiedUid,
    id: Math.floor(Math.random()* 10000000)

   });
  return docRef
}

async function addTodo (todo){
  const todoAdd = await addTodoBD(todo);
  addTodos(inputName);
  console.log("test -->", todoAdd);
 }

    ////////////////////////////////////////////////////////////
async function deleteTrack() {
  const citiesRef = collection(firestore, "to-do");

  const q = query(citiesRef, where("id", "==", 3272242));
 const querySnapshot = await deleteDoc(q);
    querySnapshot.forEach((doc) => {
 console.log(doc.data().todo);
    });
  

}

////////////////////////////////////////////////////////////////
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
        id="n1"
        style={{
          height: "35px",
          width: "500px",
          margin: "20px 0px 0px 500px",
        }}
        value={inputName}
        onChange={(e) => {
          setName(e.target.value);
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
        onClick={() => addTodo()}
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
        {tracks.map((track, index) => (
          <ol style={{ fontSize: "26px" }} key={index} id="worcks">
            {track.todo}
            <input
              id="fluency"
              type="checkbox"
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
              onClick={() => deleteTrack()}
            >
              DELETE
            </button>
          </ol>
        ))}
      </ul>
    </div>
    <div className="Find" style={{ margin: "-900px 0px 0px 1200px" }}>
    </div>
  </div>
);
};

export default connect(
  (state) => (
    {
    tracks: state.tracks,
  }),
  (dispatch) => ({
    addTodos: (trackName) => {
      const payload = {
        todo: trackName,
        UserID:' ',
        id:'',
       
      };

      dispatch(addTrack(payload));
    },
    onFindTrack: (name) => {
      dispatch(findTrack(name));
    },
   
  }),
)(Home);

