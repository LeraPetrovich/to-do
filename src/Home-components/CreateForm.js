import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import { addTrack } from "../React/action-creator";
import { findTrack } from "../React/action-creator";
import {collection, where, getDocs,addDoc, query } from "firebase/firestore";
import { auth, firestore } from "../firebase";
import style from '../module/Todo.module.scss'
const CreateForm=({ addTodos })=>{
    const [inputName, setName] = useState("");
    ///////////////////////////////////////////////////
    useEffect(() => {
      async function findName(){
        const citiesRef = collection(firestore, "to-do");
        const q = query(citiesRef, where("UserID", "==", auth.lastNotifiedUid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
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
      console.log("test -->", todoAdd.id);
     }
    
    ////////////////////////////////////////////////////////////////

    return(
        <>
        <div>
        <h1
        className={style.h1}
      >
        {" "}
        To Do List
      </h1>
    </div>

    <div style={{ backgroundColor: "cadetblue" }}>
      <input
        type="text"
        id="n1"
        className={style.input}
        value={inputName}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="To  do..."
      />
      <button
      className={style.buttonADD}
        onClick={() => addTodo()}
      >
        Add To Do
      </button>
      </div>
      </>
      
    );
}
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
  )(CreateForm);