# 🗓️ Day 25: Todo List Project

## ✍️ Context
I have been busy this week so I didn't make as much progress as I should. Let's continue our learning today. I am building a Todo List using several concepts we've covered over the past few days.

---

## 🚀 How It's Gonna Work

### 🔹 High-Level Overview
There will be:
- An input field
- An "Add" button
- A list displayed below

When a user types something in the input field and clicks "Add", the typed text will be appended to the list.

### 🔸 Low-Level Functionality
- The input field will be a **controlled component**. Every character the user types triggers the `onChange` handler.
- The input’s value is stored in a `useState` hook (e.g., `inputValue`).
- When the "Add" button is clicked, the `onClick` event fires a function that pushes this value to a list managed by another state variable.
- The list is displayed using `.map()` which renders each item as an `<li>`.

---

## 🧰 Concepts Used

- `onChange` attribute to track input field changes
- `onClick` attribute to trigger add action
- Controlled components — React state as the single source of truth
- Spread operator to append to arrays immutably
- `.map()` method for dynamic rendering
- Component reuse and modularization (`Heading` component)

---

## 🛠️ Project Walkthrough

1. Created a basic `Heading` component and imported it.
2. Used a state variable `inputValue` to store the text typed into the input field.
3. Created another state variable `inputArray` to manage the list of items.
4. Bound the input field with `value={inputValue}` and updated it with `onChange`.
5. Used `onClick` on the button to trigger a function that adds the `inputValue` to `inputArray`.
6. Used `.map()` to dynamically render each element in the list inside `<li>` tags.

---

## ⚔️ Challenges Faced During Development

- Initially, the array wasn’t updating correctly in the console because `setState` in React is asynchronous. This led to confusion about whether the value was actually getting appended.
- Used a regular array (`const inputArray = [...]`) which caused it to reset every render. Switching to `useState` fixed it.
- Tried pushing to the array directly, which mutated the state. This didn’t re-render the component. Eventually, used the spread operator to fix it.
- When trying to render the list, I initially used static list items instead of `.map()`. This was corrected to dynamic rendering using `.map()` and a helper function `createList`.

---

## 💡 Lessons Learned

- **React state updates are asynchronous** – never rely on the immediate result after setting state.
- **Direct mutation of state doesn't trigger re-renders** – always use functional updates and spread operator.
- **Controlled components make form management predictable**.
- **Modularization** — Creating reusable components like `<Heading />` keeps code clean and organized.

---

This marks a good checkpoint in React basics where form handling, dynamic rendering, and state logic all came together in a single mini project.
