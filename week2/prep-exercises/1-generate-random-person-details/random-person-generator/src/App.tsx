import React from "react";
import PersonController from "./components/PersonController";

const App: React.FC = () => {
  return (
    <div>
      <h1>Random Person Generator</h1>
      <PersonController />
    </div>
  );
};

export default App;
