import React from "react";
import Spells from "./components/Spells";
import "./App.css";
import MagicalObjects from "./components/MagicalObjects";
import Potions from "./components/Potions";

function App() {
  return (
    <div>
      <Potions />
      <Spells />
      <MagicalObjects />
    </div>
  );
}

export default App;
