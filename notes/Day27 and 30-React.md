# Day27: Implementing delete functionality in ToDo List  

I have created the Todo list and now I am trying to implement a delete functionality where when you click on one of the items from the list, it gets deleted. I am not sure how to do it yet, I am playing around. 
Below is the code for reference (without delete functionality). It has 2 files, **App.jsx** where the main code is at and **ToDoList.jsx** which has the list items.

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


So, currently the state of the todo item is localised to itself, its not going anywhere else. We need to find a way to access the parent component from TodoList component (Child component). 

So we can not only pass values but also functions as props, so if u look at this code

``` jsx
{items.map((todoItem) => (
    <TodoItem item={todoItem} />
  ))}
```
we can also pass functions like <TodoItem item = {todoItem} deleteFunction = {deleteItem}>. Here we are passing the deleteFunction to the child component and if we define the body of the deleteFunction in the parent component, then it means the child component can now access the parent component. Thats how we form a link. 

Now that we have extablished the bridge, next task is to tell react, which list item was pressed, and for this we have to have a unique value to each list item like index number. When we are passing the props, we can pass index values as well. In the map function, the first argument is value and if we include the second argument, it will act as index and thats how we can get the index value, and we can pass it to todoList item. And inside the todoList item, when we write the property onClick and include a function along with it, we can pass the ID as the argument here. But keep in mind we can't directly add the argument like 

``` jsx
<li onClick = props.deleteFunction(props.id)>{props.item}</li>  ❎
```

This is wrong as if we do this, even without us clicking the item, the function will get triggered. So, instead we will do this:

```jsx 
<li onClick={() => {props.deleteFunction(props.id);}}> ✅
```

Now only if the item is clicked, the function gets triggered. 
NOTE: **Without the arrow function, the function runs immediately during render. Wrapping it in an arrow function defers execution until the click happens.**

Next, we can add a piece of code in the parent component that gets hold of the id passed from child component that removes that id from the array. It looks something like this:

``` jsx
function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {    //Using filter function to not include the id that is been clicked.
        return index !== id;
      });
    });
  }
```

Here is how the final code looks like:
**App.jsx**
```jsx
import React, { useState } from "react";
import ToDoListItem from "./ToDoListItem.jsx";

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

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
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
          {items.map((todoItem, index) => (
            <ToDoListItem
              key={index}
              id={index}
              item={todoItem}
              deleteFunction={deleteItem}
            />
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
import React, { useState } from "react";

function ToDoListItem(props) {
  return (
    <li
      onClick={() => {
        props.deleteFunction(props.id);
      }}
    >
      {props.item}
    </li>
  );
}

export default ToDoListItem;
```
