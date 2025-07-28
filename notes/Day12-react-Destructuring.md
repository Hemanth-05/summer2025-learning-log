
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

> 🧠 You're not accessing by index like an array. In objects, you must refer to the exact key name.
> You can rename the variable by using `key: newName`.

```js
// Renaming
const { username: userName } = user;
console.log(userName); // "coder123"
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

Let us see an example where we rename all the properties inside an objects
```js
const user = {
  name: "Hemanth",
  address: {
    city: "New York",
    zip: 10001
  }
};

// Renaming all properties
const {
  name: fullName,
  address: {
    city: userCity,
    zip: postalCode
  }
} = user;

console.log(fullName);     // "Hemanth"
console.log(userCity);     // "New York"
console.log(postalCode);   // 10001
```

If we also wants to rename address then we write
```js
// Rename 'address' to 'location'
const { address: location } = user;
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

## 📍 Summary: Arrays vs. Objects

| Feature            | Arrays                                      | Objects                                     |
|--------------------|---------------------------------------------|---------------------------------------------|
| Access Type        | Positional (based on index)                 | Key-based                                   |
| Syntax             | `const [a, b] = arr`                        | `const { key } = obj`                      |
| Skip Values        | Yes (`const [a, , c] = arr`)                | No (must reference key)                    |
| Rename             | Not applicable                              | Yes (`{ key: newName }`)                   |
| Default Values     | Yes (`const [a = 5] = []`)                  | Yes (`const { key = default } = obj`)      |

---

Destructuring boosts code readability, simplifies assignments, and is foundational in writing clean, modern JavaScript—especially in React.
