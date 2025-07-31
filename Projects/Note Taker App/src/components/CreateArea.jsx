import React from "react";

function CreateArea(props) {
  function handleSubmit() {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          onChange={props.forChange}
          value={props.titleValue}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={props.forChange}
          value={props.contentValue}
        />
        <button onClick={props.forClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
