import { useState } from "react";
import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="p-5 h-screen flex justify-center items-center">
      <Home />
    </div>
  );
}

export default App;
