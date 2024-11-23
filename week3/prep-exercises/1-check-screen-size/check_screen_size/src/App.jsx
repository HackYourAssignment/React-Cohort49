import React from "react";
import ScreenInfo from "./components/ScreenInfo";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Responsive Screen Size Checker</h1>
      </header>
      <main>
        <ScreenInfo />
      </main>
    </div>
  );
};

export default App;
