# 📘 React Day 14: Today I have covered a pretty straight forward concept of Event handelling - Mouse handelling concept.

# Another Concept: Input Field Binding with `onChange` and `value`

When using the `value` attribute along with `onChange` in an input element in React, you're creating a **controlled component**. Here's how it works:

---

## 🧠 What's Really Happening?

```jsx
const [name, setName] = useState("");

function handleChange(event) {
  setName(event.target.value);
}

<input type="text" value={name} onChange={handleChange} />
```

---

## 💡 Step-by-Step Breakdown

1. User types a character, e.g., `"A"`
2. `onChange` triggers `handleChange`
3. `handleChange` sets the new value to state: `setName("A")`
4. React re-renders the component
5. During render, `value={name}` is now `"A"`
6. So the field looks like it accepted user input, but what’s actually being shown is the updated **state value**

---

It may look like the user is typing directly into the field, but it’s **React putting the value back in based on the state**!

This is a key React pattern for handling forms and is essential for building controlled, predictable input behavior.
