# 📘 Day 1 – React Basics: Rendering Elements

Today, I learned how to use the `render()` function from the **`react-dom`** module to display elements on the screen.

## 🧠 Key Concept

The `render()` function takes **two required arguments**:

1. **WHAT TO SHOW** – the content you want to render (e.g., a heading, a component)
2. **WHERE TO SHOW** – the DOM element where you want to render it

This is the core of how React updates the UI.

---

## 📌 Example

Let's say we want to display the text **"Hello"** inside an `<h1>` tag, and our HTML file contains a single `<div>` with an ID `root`. Here’s how we would render it:

```jsx
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <h1>Hello</h1>,
  document.getElementsById("root")
);
```


---

## 🧱 Multiple Elements in JSX

In React, when we want to render **multiple HTML elements** (e.g., an `<h1>` followed by a `<p>`), we **must wrap them in a single parent element**.

This is because `ReactDOM.render()` only accepts **one element** as the first argument.

For example:

```jsx
// ❌ This will cause an error:
ReactDOM.render(
  <h1>Hello</h1>
  <p>This is a paragraph</p>,
  document.getElementById("root")
);

// ✅ Correct approach:
ReactDOM.render(
  <div>
    <h1>Hello</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);
```


---

## 🔁 Embedding JavaScript in JSX

JSX doesn't just allow HTML inside JavaScript — it also lets us embed **JavaScript expressions inside our HTML** using **curly braces `{}`**.

This means we can pass variables, function calls, or even expressions directly into our UI code.

### 🧪 Example:

Let's say we have a variable called `name`:

```jsx
const name = "Hemanth";
```

We can use this inside our JSX like this:

```jsx
ReactDOM.render(
  <h1>Hello {name}</h1>,
  document.getElementById("root")
);
```

> 💡 This will output: **Hello Hemanth**

You can also use expressions:

```jsx
<h2>{5 + 3}</h2> // Will display 8
```

---

## 🎨 Inline Styling in JSX

We cannot use inline styling in JSX the same way we do in HTML.

In HTML:

```html
<h1 style="color: red">Hello</h1>
```

But in javascript the value for the style attribute, its expecting a javascript object instead of string. We know the syntax of javascript objects {key: value}. Here key is a variable and value would be a string. So, it would be
```jsx
{color: "red"}
```
Now if we want to add any javascript inside a html then we should use a {}. so at last it comes out as
```jsx
<h1 style = {{color = "red"}}> Hello </h1>
```

But why do we want to use the inline styling. It is because it allows us to change the styles on the go. Lets take an example to understand.

```jsx
const customStyle = {
    color: "red",
    fontSize: "20px",
    fontWeight: "bold"
};

reactDOM.render(
    <h1 style = {customStyle}> Hello World </h1>
);
```


Now lets say we have to change the styling depending on the time. So with the help of inline styling, we don't need to touch the code again, all we have to do is to update the properties of our custom style object. 

```jsx 
if (isAfternoon)
{
    customStyle.color = "blue";
}
```

Now if its afternoon, the color of h1 will be blue. This is the use of inline styling.




