
# 📘 Day 11 – Declarative vs Imperative Programming in React

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
