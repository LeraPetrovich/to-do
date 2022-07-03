import React from "react";
import ToDoList from "../Home-components/ToDoList";
import CreateForm from "../Home-components/CreateForm";
const Home = () => {
 return (
  <div style={{ backgroundColor: "cadetblue" }}>
    <div style={{ backgroundColor: "cadetblue" }}>
     <CreateForm/>
    </div>
    <ToDoList/>
  </div>
);
};

export default Home;

