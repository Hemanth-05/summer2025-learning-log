import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form onSubmit={props.handleClick}>
        <input
          name="title"
          placeholder="Title"
          onChange={props.handleTitle}
          value={props.titleValue}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={props.handleText}
          value={props.textValue}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
