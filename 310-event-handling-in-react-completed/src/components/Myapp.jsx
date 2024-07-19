import React, { useState } from "react";

function App() {
  const [isMouseOver, setMouseOver] = useState(false);
  const [heading, setHeading] = useState("Hello");

  function headingText() {
    setHeading("hello");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{heading} </h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroungColor: isMouseOver ? "black" : "white" }}
        onClick={headingText}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
