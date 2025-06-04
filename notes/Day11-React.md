
# 📘 Day 11 – Declarative vs Imperative Programming and `useState`, Re-rendering  in React

Today, I learned about two different programming paradigms: **Declarative** and **Imperative**. Understanding the difference between the two helps in writing more readable, maintainable, and efficient code — especially in React.

---

## 🧱 Imperative Programming

### 👉 What it is:
- You tell the computer **how** to do something, step by step.
- It focuses on **control flow** and **explicit instructions**.

### 🧪 Example:

```js
const numbers = [1, 2, 3];
const doubled = [];

for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

console.log(doubled); // [2, 4, 6]
```

> You're manually looping, pushing, and managing the process.

---

## 🧾 Declarative Programming

### 👉 What it is:
- You tell the computer **what** you want done, not how.
- Focuses on **describing the outcome**, not the steps.

### 🧪 Example:

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6]
```

> You declare your intent (“map each number to double it”), and the language handles the steps.

---

## 💬 Real-Life Analogy

- **Imperative:** “Go to the kitchen, open the fridge, take out the eggs, heat a pan, crack the eggs, cook them.”
- **Declarative:** “Make me scrambled eggs.”

---

## ✅ Summary

| Feature                | Imperative                             | Declarative                          |
|------------------------|-----------------------------------------|---------------------------------------|
| Focus                  | **How** to do it                        | **What** to do                        |
| Code style             | Step-by-step instructions               | High-level description                |
| Common in              | Traditional JavaScript, C, Java         | React, SQL, HTML, functional JS       |
| Example methods        | `for`, `while`, manual state changes    | `map`, `filter`, JSX, `reduce`        |
| Benefit                | Full control                            | Simpler, clearer, often less error-prone |

---

React is **declarative** — you describe what the UI should look like, and React figures out how to render it to the DOM.

## 🔄 Understanding `useState` and Re-rendering in React

Today, I explored the concept of **React Hooks**, specifically the `useState()` hook.

### 🧠 What is `useState()`?

- A **React Hook** that lets you **store and update state** in functional components.
- It returns an array with two values:
  - The current **state value**
  - A **function** to update that value

### ✅ Example:

```jsx
const [count, setCount] = useState(0);
```

Here:
- `count` is the current value
- `setCount` is used to change it

### ⚠️ Why `const`?

- We're **not changing the reference to `count` or `setCount`**, only updating the value that React tracks.
- So using `const` is totally safe and idiomatic here.

---

## 🔁 How React Re-renders

- When you call `setCount()`, **React re-runs the component function** that contains `useState`.
- It **does not reload the full page**.
- Only the **component where the state changed** — and its **children** — will re-render.

### 🌳 Tree Example:

```jsx
<App>
 ├── <Navbar />
 ├── <Counter />  ← uses useState
 │    ├── <Display />
 │    └── <Buttons />
 └── <Footer />
```

If `Counter` changes its state:

- ✅ `Counter` re-renders
- ✅ `Display` and `Buttons` also re-render
- ❌ `Navbar` and `Footer` remain untouched

---
## 🧠 Bonus: `onClick={increase}` vs `onClick={increase()}`

- ✅ `onClick={increase}` → passes the function reference. It runs **only when clicked**.
- ❌ `onClick={increase()}` → runs **immediately during render**, causing infinite loops.

---

This was a deep dive into how React handles **state, re-renders**, and **component-based UI** updates. Loving it so far!

---

## 🔍 Understanding Array Destructuring in `useState()`

When we use `useState()` in React, we usually write it like this:

```js
const [count, setCount] = useState(0);
```

Let’s break this down step by step:

### ✅ What `useState()` Returns

The `useState()` function returns an **array** with exactly two items:

```js
[ currentStateValue, functionToUpdateState ]
```

So calling `useState(0)` returns:

```js
[0, setCountFunction]
```

### 🧠 Array Destructuring

JavaScript lets you assign variables directly from elements in an array using destructuring:

```js
const arr = [10, 20];
const [a, b] = arr; // a = 10, b = 20
```

So:

```js
const [count, setCount] = useState(0);
```

- `count` gets the current state value (starting at 0)
- `setCount` is a function used to update `count`

### 🔁 Updating the State

Every time you call `setCount(newValue)`, React:
- Updates the value of `count`
- Re-renders the component

### 🤓 Why Destructuring?

This makes your code:
- Clean and readable
- Easy to understand with meaningful variable names

Examples:

```js
const [name, setName] = useState("");
const [isDarkMode, setIsDarkMode] = useState(false);
```

### 🔄 Without Destructuring (Not Recommended)

You could technically write:

```js
const stateArr = useState(0);
const count = stateArr[0];
const setCount = stateArr[1];
```

But it’s less readable and not idiomatic in React.

---