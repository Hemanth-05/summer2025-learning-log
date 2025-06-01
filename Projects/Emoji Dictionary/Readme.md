# 📘 Emoji Dictionary Project

This project is a simple **Emoji Dictionary Web App** built using **React**. It displays a list of emoji entries with their name, symbol, and description — like a mini version of [Emojipedia](https://emojipedia.org).

You can access my project at this link: https://5xcjtn.csb.app/
---

## 🔧 How It Works

- All emoji data is stored in a file called `emojipedia.js`, which contains an **array of emoji objects**.
- Each object includes:
  - `id`: Unique identifier
  - `name`: Name of the emoji
  - `emoji`: The emoji symbol
  - `meaning`: Its description
- This data is imported into the main component, and the `.map()` method is used to **loop through the array** and dynamically render each emoji entry on the page.

### ✅ Dynamic Rendering

When a new emoji is added to `emojipedia.js`, it is **automatically displayed on the website** — no need to manually write new components or update the UI.

```js
// Example emoji entry
{
  id: 7,
  name: "Thinking Face",
  emoji: "🤔",
  meaning: "Used to indicate thinking or pondering."
}
```

---

## 📦 Component Structure

- `App.jsx`: The main file that maps over the data and renders each emoji entry using the `Entry` component.
- `Entry.jsx`: A wrapper component that uses `DictionaryTerm` and `DictionaryDescription`.
- `DictionaryTerm.jsx`: Displays the emoji and its name.
- `DictionaryDescription.jsx`: Displays the meaning.

---

## 🧠 Challenges Faced

### 1. Accessing Data by Index (Day 7)

At first, I tried accessing `Emojipedia[props.number]` using syntax like `Emojipedia[{props.number}]`, which caused unexpected behavior because:

- `{}` creates an object, not a number
- React tried to access `Emojipedia[[object Object]]`, which is invalid

✅ **Fix**: Use `Emojipedia[props.number]` without extra `{}`.

---

### 2. Improper Use of `.map()` Callback (Day 8)

I originally created a `CreateEntry` function without parameters and used it like `Emojipedia.map(CreateEntry)`, but forgot that `.map()` automatically passes each item.

✅ **Fix**: Make sure `CreateEntry()` accepts a parameter:

```jsx
function CreateEntry(entry) {
  return (
    <Entry
      key={entry.id}
      name={entry.name}
      emoji={entry.emoji}
      description={entry.meaning}
    />
  );
}
```

This allowed React to dynamically render each emoji entry using the data.

---

## 🚀 Takeaway

This project showed me the power of `.map()` and props in React for creating dynamic, reusable UI components. With proper structure and use of keys, this app can scale easily by just adding more data.