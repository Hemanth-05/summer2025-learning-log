# 📅 Day 4 - Contacts App (React Practice + Local Setup)

Today, I created a **Contacts App** using **React**. I initially built the app on **CodeSandbox**, but instead of keeping it there, I downloaded the project and ran it locally. Running it locally made the process more realistic and helped me understand the setup required outside of a sandboxed environment.

---

## 🧠 What I Learned

- How to pass objects as props in React
- How to destructure and use props inside components
- How Create React App handles file structure and import restrictions
- The difference between CodeSandbox and local development

---

## ⚠️ Challenges I Faced

### 1. Passing Object Props to Components

Initially, I couldn't get the props concept working properly. It wasn’t as straightforward as it seemed while learning it.

I created a separate `contacts.js` file to store the contacts as JavaScript objects. When passing them to the `Card` component, I realized that I needed to pass the object as a variable:

```jsx
<Card details={Contacts[0]} />
```

To confirm that the object was passed correctly, I used `console.log(props)` inside the `Card` component. Once I saw the object, it became clear how to access values:

```jsx
<h2>{props.details.name}</h2>
```

This hands-on debugging made the concept much clearer and gave me confidence in using props effectively.

---

### 2. CSS Import Path Issue

Another challenge was related to importing a CSS file from the `public/` folder using:

```js
import '../public/styles.css'; // ❌
```

This caused an error because **Create React App (CRA)** doesn't allow importing files outside of the `src/` folder via relative paths.

#### ✅ Solution:

- I moved the `styles.css` file into the `src/` folder:
  ```js
  import './styles.css'; // ✅
  ```

- Alternatively, if I wanted to keep the CSS in `public/`, I could link it in `public/index.html` like this:
  ```html
  <link rel="stylesheet" href="%PUBLIC_URL%/styles.css" />
  ```

This experience helped me understand how CRA manages asset paths and enforces structure.

---

## ✅ Summary

This project helped me apply what I've learned about props and local project setup. Facing and solving real development challenges made me more confident and comfortable with React and Create React App.
