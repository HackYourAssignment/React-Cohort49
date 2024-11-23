import React from "react";
import PersonByWindowSize from "./components/PersonByWindowSize";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h1>Responsive Avatar App</h1>
      <p>
        Window size: {width}px x {height}px
      </p>
      <PersonByWindowSize />
      <p>Resize the window to see avatars change dynamically!</p>
    </div>
  );
}

export default App;
