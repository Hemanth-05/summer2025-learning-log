# 📘 Day 2 – React Components & Import/Export

For Day 2, I decided to switch things up and take handwritten notes to evaluate if that method helps me learn more efficiently. I’ve uploaded the photos of these notes in the `/notes/Day2-React Snapshots/` folder.

## 📚 Topics Covered

- Creating and using React components
- Importing and exporting components using ES6 syntax
- Understanding the file/module structure in React apps

## 🛠️ Practice Activity: Keeper App (Part 1)

To apply what I learned, I built the first part of a **"Keeper App"**, where I created reusable components and structured them using proper imports and exports.

### 🧠 Learning Highlight

During development, I faced a challenge when returning multiple elements from a component. I initially wrote:

```jsx
return (
  <Header />
  <Footer />
);
```
Then corrected it To

```jsx
return (
  <>
    <Header />
    <Footer />
  </>
);
```

I have also included the Snapshot of the Keeper app in the same folder as the handwritten notes. Check it out!
