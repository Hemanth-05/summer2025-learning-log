# 📘 Day 19 – Handling Complex State in React (Multiple Inputs)
Learned how to manage and update a more complex piece of state in React — specifically, an object with multiple properties — using `useState`.
---

## 🧠 The Scenario
You're building a form that asks for both a first name and a last name. Instead of using two separate `useState` hooks, you want to manage both using a **single state object**:

```js
const [fullName, setFullName] = useState({
  fName: "",
  lName: ""
});
```

This way, `fullName` holds both pieces of data. But how do you update just one part (e.g., first name) **without wiping out** the other (e.g., last name)?

---

## 🧩 Controlled Inputs with Shared State
Here's how the component listens for changes in both inputs:

```jsx
<input
  name="fName"
  onChange={updateFullName}
  placeholder="First Name"
  value={fullName.fName}
/>

<input
  name="lName"
  onChange={updateFullName}
  placeholder="Last Name"
  value={fullName.lName}
/>
```

Each input has a `name` attribute, so we can identify **which field is changing** when `onChange` is triggered.

---

## 🔁 The Update Logic
The handler function looks like this:

```js
function updateFullName(event) {
  const newValue = event.target.value;
  const inputName = event.target.name;

  setFullName((prevValue) => {
    if (inputName === "fName") {
      return { fName: newValue, lName: prevValue.lName };
    } else if (inputName === "lName") {
      return { fName: prevValue.fName, lName: newValue };
    }
  });
}
```

### 📝 Step-by-Step Breakdown
1. **User types in input** → `onChange` triggers `updateFullName()`.
2. **Extract values** from the input element:
   - `event.target.value`: The typed value (e.g., "John").
   - `event.target.name`: The input field name ("fName" or "lName").
3. **Update state safely**:
   - We use a callback inside `setFullName()` so we always get the latest state (`prevValue`).
   - We return a **new object** with one field updated, while **keeping the other one unchanged**.

### ❗ Why Not Just Do This?
```js
setFullName({ fName: newValue });
```
Because doing this **overwrites** the entire state object and you’ll lose `lName`. That's why we use the callback form with `prevValue`.

---

## 💡 Best Practice: Avoid Direct Mutation
React state should **never be mutated directly**. Always create and return a **new object** or array when updating state.

---

## ✅ Summary
- Use a single `useState` with an object to handle related inputs together.
- Use `event.target.name` to know **which field** is changing.
- Use `setState` with a callback to ensure you're updating based on the **previous state**.
- Return a new object with only the needed property updated.

---

## 🔍 Bonus Tip (for later):
This logic can be shortened using computed property names:
```js
setFullName((prevValue) => ({
  ...prevValue,
  [inputName]: newValue
}));
```
This makes the function cleaner and more scalable as the form grows.

---

This documentation is written in a way that future-you can quickly understand what you did and why it works — even weeks later. 👍
