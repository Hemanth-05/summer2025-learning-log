# Day27: Implementing delete functionality in ToDo List

I have created the Todo list and now I am trying to implement a delete functionality where when you click on one of the items from the list, it gets deleted. I am not sure how to do it yet, I am playing around. Below is the code for reference (without delete functionality)

**App.jsx**
```jsx 
import React, { useState } from "react";
import TodoItem from "./TodoItem.jsx";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <TodoItem item={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
```

**TodoList.jsx**
```jsx
import React from "react";

function TodoItem(props) {
  return (
    <div>
      <li>{props.item}</li>
    </div>
  );
}

export default TodoItem;
```