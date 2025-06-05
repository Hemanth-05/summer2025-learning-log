
# 📘 Day 12 – Destructuring in JavaScript (React Focused)

Destructuring is a powerful feature introduced in ES6 that allows you to extract values from **arrays** or **objects** and assign them to variables in a clean, readable way. This feature is especially handy when working with frameworks like React.

---

## 🔹 Destructuring Arrays

### ✅ Basic Example
```js
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

### ⏩ Skipping Items
```js
const numbers = [10, 20, 30, 40];
const [first, , third] = numbers;
console.log(first); // 10
console.log(third); // 30
```

### 🛠 Default Values
```js
const scores = [80];
const [math = 0, science = 0] = scores;
console.log(math);    // 80
console.log(science); // 0
```

---

## 🔹 Destructuring Objects

### ✅ Basic Example
```js
const person = {
  name: "Hemanth",
  age: 25
};
const { name, age } = person;
console.log(name); // Hemanth
console.log(age);  // 25
```

### 🔁 Renaming Variables
```js
const user = {
  id: 1,
  username: "coder123"
};
const { username: userName } = user;
console.log(userName); // coder123
```

### 🛠 Default Values
```js
const settings = {
  theme: "dark"
};
const { theme, fontSize = 16 } = settings;
console.log(theme);    // "dark"
console.log(fontSize); // 16
```

---

## 🔹 Destructuring in Functions

### Receiving Objects as Parameters
```js
function printUser({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}

const user = { name: "Alice", age: 30 };
printUser(user); // Alice is 30 years old.
```

---

## 🔁 Real-World React Usage: `useState`
```js
const [count, setCount] = useState(0);
```
The `useState()` hook returns an array with two elements:
```js
const stateArray = [0, function updateState() {...}];
```
Using destructuring:
```js
const [count, setCount] = stateArray;
```
- `count = 0`
- `setCount = function updateState()`

This is a practical example of **array destructuring** in everyday React development.

---

## 📍 Quick Reference Table

| Type       | Syntax                           | Description                          |
|------------|-----------------------------------|--------------------------------------|
| Array      | `const [a, b] = array`           | Based on position                    |
| Object     | `const { key } = object`         | Based on property name               |
| Skipping   | `const [a, , c] = array`         | Skip specific array values           |
| Renaming   | `const { key: newVar } = object` | Rename extracted object properties   |
| Defaults   | `const [a = 10] = []`            | Provide fallback/default values      |

---

Destructuring boosts code readability, simplifies assignments, and is foundational in writing clean, modern JavaScript—especially in React.
