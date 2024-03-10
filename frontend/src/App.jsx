import { useState } from "react";
import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <div className="p-5 h-screen flex justify-center items-center">
      <SignUp />
    </div>
  );
}

export default App;
