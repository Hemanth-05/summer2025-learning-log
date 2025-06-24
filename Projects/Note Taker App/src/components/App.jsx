import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [titleArray, setTitleArray] = useState([]);
  const [textArray, setTextArray] = useState([]);

  function handleTitleFun(event) {
    setTitle(event.target.value);
  }

  function handleTextFun(event) {
    setText(event.target.value);
  }

  function handleClickFun(event) {
    event.preventDefault();
    setTitleArray((prevValue) => [...prevValue, title]);
    setTextArray((prevValue) => [...prevValue, text]);
    setTitle("");
    setText("");
  }

  return (
    <div>
      <Header />
      <CreateArea
        titleValue={title}
        textValue={text}
        handleTitle={handleTitleFun}
        handleText={handleTextFun}
        handleClick={handleClickFun}
      />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
