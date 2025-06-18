
# 📝 Todo List Project (Day 25)

This is a simple **Todo List application** built using React as part of my Day 25 learning challenge. It covers essential concepts such as controlled components, `useState`, `onChange`, `onClick`, array updates with the spread operator, and mapping JSX.

---

## 🚀 How It Works

### High-Level Overview
- A user types a task in the input field.
- On clicking the "Add" button, the task is added to a list below the input.
- The UI updates dynamically to reflect the added items.

### Low-Level Breakdown
- The input is a **controlled component**, meaning its value is managed by React state.
- `onChange` updates the input value in state every time the user types.
- `onClick` on the "Add" button pushes the new input value into an array using the **spread operator**.
- The updated array is rendered using `.map()` to display each item as a list element (`<li>`).

---

## 💡 Concepts Covered

- `useState` for state management
- Controlled input components
- `onChange` for input tracking
- `onClick` for button interaction
- Array manipulation with the spread operator
- Rendering list items dynamically with `.map()`

---

## ⚙️ Technologies Used
- React
- JSX
- Functional Components

---

## 📂 File Structure
```
/src
  ├── App.jsx
  ├── Heading.jsx
  └── index.js
```
---
I have built in online on codesandbox, I have provided the link below where you can access the project
Link: https://h4nrnv.csb.app/

If you want to run locally, then you can do that as well:
---

## 🛠 How to Run Locally

1. Clone the repository:
   ```
   git clone https://github.com/Hemanth-05/summer2025-learning-log.git
   ```

2. Navigate into the project directory:
   ```
   cd your-project-directory
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

---

## 📌 Notes

This project is a hands-on application of React fundamentals and helped reinforce the concepts I learned from Day 1 through Day 24. It was a great way to practice event handling and dynamic rendering.

