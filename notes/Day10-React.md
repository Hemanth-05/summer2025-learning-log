
# 📘 Day 10: Conditional Rendering in React (Ternary & && Operators)

## ✅ What is Conditional Rendering?
Conditional rendering in React means showing different UI elements based on conditions like:
- Whether a user is logged in
- Whether data is loading
- Whether a form is complete

React uses JavaScript expressions to control what gets rendered — there's no special syntax required.

---

## 🟩 1. Ternary Operator (`condition ? trueOutput : falseOutput`)

### 🔸 Syntax:
```jsx
condition ? <JSX if true> : <JSX if false>
```

### 🔸 Example:
```jsx
const isLoggedIn = true;

function App() {
  return (
    <div>
      {isLoggedIn === true ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
    </div>
  );
}
```

✅ If `isLoggedIn` is `true`, it shows "Welcome Back!", otherwise it shows "Please Log In".

### 🧠 When to Use:
Use ternary when you have **two options** (like if/else).

---

## 🟩 2. Logical AND (`&&`) Operator

### 🔸 Syntax:
```jsx
condition && <JSX if condition is true>
```

### 🔸 Example:
```jsx
const isPremiumUser = true;

function App() {
  return (
    <div>
      <h1>Dashboard</h1>
      {isPremiumUser && <p>Thank you for being a premium user!</p>}
    </div>
  );
}
```

✅ If `isPremiumUser` is `true`, the `<p>` tag is rendered.  
❌ If `false`, nothing is rendered.

### 🧠 When to Use:
Use `&&` when you want to render something **only when the condition is true** and render **nothing** when it's false.

---

## 🟦 3. Combining Conditions

```jsx
function Greeting({ isLoggedIn, isAdmin }) {
  return (
    <div>
      {isLoggedIn ? (
        isAdmin ? <h1>Welcome, Admin!</h1> : <h1>Welcome, User!</h1>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
}
```

---

## 🧪 4. Bonus: Using `if` outside JSX

```jsx
function App() {
  const isLoading = true;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <h1>Data Loaded</h1>;
}
```

---

## ✅ Best Practices
- Use `&&` for simple one-sided conditions
- Use ternary for choosing between two options
- Avoid deeply nested ternaries (hard to read)
- Prefer moving logic outside JSX when it gets too complex

---

## 🏁 Summary Table

| Condition Type | Use Case                      | Syntax                                |
|----------------|-------------------------------|---------------------------------------|
| `if/else`      | Return different components   | `if (cond) return X; else return Y;`  |
| Ternary        | Choose between two elements   | `{cond ? <A /> : <B />}`             |
| `&&`           | Show something on true only   | `{cond && <A />}`                    |

---

## 💡 Key Insight

If you're only rendering something when a condition is true and **nothing otherwise**, use:

```jsx
{condition && <Component />}
```

Instead of:

```jsx
{condition ? <Component /> : null}
```

It's shorter, cleaner, and more idiomatic in React.
