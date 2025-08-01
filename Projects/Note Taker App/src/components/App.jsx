import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [noteItem, setNoteItem] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const inputName = event.target.name;
    const newValue = event.target.value;
    setNoteItem((prevValue) => {
      if (inputName === "title") {
        return {
          title: newValue,
          content: prevValue.content,
        };
      } else if (inputName === "content") {
        return {
          title: prevValue.title,
          content: newValue,
        };
      }
    });
  }
  function handleClick(event) {
    setNotes((prev) => {
      return [...prev, noteItem];
    });

    setNoteItem({
      title: "",
      content: "",
    });
  }

  function handleDelete(id){
    setNotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function createNote(item, index) {
    return <Note key={index} id = {index} title={item.title} content={item.content} deleteFunctionality ={handleDelete}/>;
  }

  return (
    <div>
      <Header />
      <CreateArea
        forClick={handleClick}
        forChange={handleChange}
        titleValue={noteItem.title}
        contentValue={noteItem.content}
      />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
