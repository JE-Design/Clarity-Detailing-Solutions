import React from "react";
import AppRouter from "./AppRouter"
import "./App.css";
import { Navbar } from "components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
