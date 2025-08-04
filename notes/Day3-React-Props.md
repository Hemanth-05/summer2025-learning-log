# 📘 Day 3 – React Review & Reinforcement

Today, I started by **revisiting the notes from Day 1 and Day 2** to reinforce what I’ve learned so far. This included:

- How `ReactDOM.render()` works
- Wrapping multiple JSX elements inside a single parent
- Import/export of components
- Embedding JavaScript in JSX using `{}` syntax
- Inline styling and the use of style objects

The goal was to solidify my foundational understanding before moving forward. Reviewing helped me catch small things I missed earlier and gave me more confidence in applying these concepts in practice.

# Understanding Props in React

Today, I focused on learning and internalizing the concept of **props** in React.

## 🧠 My Understanding

Props (short for "properties") in React are used to pass data from one component to another. They help make components **reusable** by allowing dynamic values to be passed in. Until now, I was creating static components or functions. But with props, I can send different data to the same component structure, making it flexible.

To pass a prop, I use an attribute-style syntax when calling the component, and inside the component, I receive those props using a parameter — commonly named `props`. I then access individual values using dot notation, like `props.name`.

## 📌 Example

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Welcome name="Hemanth" />
```

This renders:
```html
<h1>Hello, Hemanth!</h1>
```

If I change the prop value:

```jsx
<Welcome name="Alice" />
```

It becomes:
```html
<h1>Hello, Alice!</h1>
```

## 🧠 Key Concepts with Jargon

- **Props**: Short for properties, they are read-only attributes passed from a parent to a child component.
- **Component Reusability**: Props allow components to be reused with different input data.
- **Unidirectional Data Flow**: Props flow from parent → child only.
- **Props Object**: All props are passed to the component as a single JavaScript object.
- **Dot Notation Access**: You access values using `props.propertyName`.

## ✅ Takeaway

Props are essential for building reusable and dynamic components. They make my React components much more powerful and flexible, and mastering them is a key step toward building real-world applications.

## ⚠️ Note on `className` and Custom Components

A key detail I learned while experimenting with props:

When passing `className` (or other standard HTML attributes) to a **custom component** like `<Card />`, the styling will **not be applied automatically** unless the component uses that prop internally.

For example:

```jsx
<Card className="Hello" />
```

If the `Card` component does not explicitly use `props.className`, the `"Hello"` class won't be applied to anything in the DOM. To apply it correctly, you need to forward it inside the component like this:

```jsx
function Card(props) {
  return (
    <>
      <h2 className={props.className}>{props.name}</h2>
      <img src={props.imgLink} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </>
  );
}
```

Now, if you pass `className="Hello"` to the `Card`, the class will be applied to the `<h2>` and your CSS will work as expected.

> 🔑 React does **not auto-apply HTML-like props** in custom components. You must **manually pass them to DOM elements** within your component.

