import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputContainer from "./components/InputContainer";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer/>
      <ToDoContainer/>
      
      
    </main>
  );
}

export default App;
