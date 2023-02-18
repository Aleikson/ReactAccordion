import React from "react";
import { accordion } from "./components/Accordion";
import "./App.css";

function App() {
  return (
    <div className="container">
      {accordion()}
    </div>
  );
}

export default App;