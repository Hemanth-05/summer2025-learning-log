# 📘 Day 8 – Looping with `map()` in React

Today is Day 8 and I have missed yesterday as I was busy with other things but we are back today. The topic that we gonna learn today... with no furthre adue is.... Concept of maps. How we use maps to loop through the data in a array format. Thats what we gonna learn today.

So, whenever we are working with a data in the form of array, the code becomes repeated.

For Ex: 

```jsx
import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}
```
Above is a App.jsx file which is getting data from contacts.js file which has an array of 3 objects as data. If you look at it, you'll see the repeated code. How do we avoid it. Through mapping concept.
We first need to loop the array contacts. We do that by 

```jsx
contacts.map()
```
And this map function expects an input and that input should be a function as well. This is what is called **FUNCTIONAL PROGRAMMING** where instead of passing values to code we pass functions into functions in the functions.
Instead of creating Card component over and over again, we can create a CreateCard function and send that function as an input to map function. Lets see how that works in practice:

```jsx
import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function CreateCard(contactDetails) {
  return (
    <Card
      key={contactDetails.id}
    //   id={contactDetails.id}     This you can use as a prop to render the kay on the website
      name={contactDetails.name}
      img={contactDetails.imgURL}
      tel={contactDetails.phone}
      email={contactDetails.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(CreateCard)}
    </div>
  );
}

export default App;

```
Everything looks fine but what is key! You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array. This key is an unique id that should already exist in the data. And you cannot use any other name other than key for it. 
Note that your components won’t receive key as a prop. It’s only used as a hint by React itself. If your component needs an ID, you have to pass it as a separate prop: as I did in the above code (commented part)

Note: Use React Documentation to solve errors rather than chatGPT. That way you will know how to read docs. Reading docs will help you in many ways, there are so many things to one line of the code which chatgpt may or maynot explain but documentation does. 


**A project was built today using this concept — refer to its README for project-specific details.**

## 💡 Bonus: Other Useful Array Methods

### 🔁 `map()`
**Purpose:** Creates a new array by transforming every element in the original array.

```js
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function(num) {
  return num * 2;
});
// Result: [2, 4, 6, 8]
```

---

### 🧹 `filter()`
**Purpose:** Creates a new array that contains only the elements which satisfy a given condition.
It doesn't modify the original array — it simply checks each item, and if the condition returns true, that item is included in the new array.

Unlike map(), which transforms each item, filter() only includes or excludes items.

```js
const numbers = [1, 2, 3, 4];

const even = numbers.filter(function(num) {
  return num % 2 === 0;
});
// Result: [2, 4]
```

---

### 🧮 `reduce()`
**Purpose:** Reduces the array to a single value by applying a function to each item.

```js
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce(function(accumulator, current) {
  return accumulator + current;
}, 0);
// Result: 10
```

---

### 🔍 `find()`
**Purpose:** Returns the **first** element in the array that satisfies a condition.

```js
const numbers = [1, 3, 5, 7, 10, 15];

const firstEven = numbers.find(function(num) {
  return num % 2 === 0;
});
// Result: 10
```

---

### 🔢 `findIndex()`
**Purpose:** Returns the **index** of the first element that matches a condition. If no match, returns `-1`.

```js
const names = ["Alice", "Bob", "Charlie"];

const index = names.findIndex(function(name) {
  return name === "Charlie";
});
// Result: 2
```

---

### ✅ Quick Reference

| Method         | Returns         | Use Case                          |
|----------------|------------------|-----------------------------------|
| `map()`        | New array        | Transforming data                 |
| `filter()`     | New array        | Selecting based on condition      |
| `reduce()`     | Single value     | Aggregating (sum, average, etc.)  |
| `find()`       | First matching item | Finding a specific element     |
| `findIndex()`  | Index number     | Finding the position of a match   |

---

Today, I also built a project based on this concept — rendering an emoji dictionary using `map()`. The project has its own README with details.
