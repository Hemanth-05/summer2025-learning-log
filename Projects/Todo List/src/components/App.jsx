import React, { useState } from "react";
import Heading from "./Heading.jsx";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputArray, setInputArray] = useState([]);
  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function createList(item) {
    return <li>{item}</li>;
  }

  function handleClick() {
    setInputArray((prevItems) => [...prevItems, inputValue]);
    setInputValue("");
  }
  return (
    <div className="container">
      <Heading />
      <div className="form">
        <input onChange={handleChange} type="text" value={inputValue} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{inputArray.map(createList)}</ul>
      </div>
    </div>
  );
}

export default App;
