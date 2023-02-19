import React from "react";
import { accordion } from "./components/Accordion";
import { header } from "./components/Header";
import "./App.css";

function App() {
  return (
    <div>
      {header()}
      {accordion()}
    </div>
  );
}

export default App;