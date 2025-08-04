# Day 17 - Behaviour of submit button in forms and Classes vs Hooks
## Behaviour of Submit button

```html
<form>
    <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button type = "submit" onClick={handleSubmit}>Submit</button>
</form>
```

Whenever there is a submit inside a form tag, when we press it, it by default submits the form and refreshes the page. What really happens is that when we click on the button inside the form especially when its a submit button, it triggers a method on the form "onSubmit". So, the above code, we can write it in this way: 

```html
<form onSubmit = {handleSubmit}>
    <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button type = "submit">Submit</button>
</form>
```

So, now when we press the button, the form triggers the function handleSubmit and that code gets executed. And once the code executes, the page gets refreshed automatically.

Now what if we want the handleSubmit function to get executed but prevent the default behaviour of submit button that is "Refreshing the page". Good news is we can do that.

Now inside the handleSubmit function, at the very beginning, we should call the function event.preventDefault() to prevent the page from refreshing. This ensures the default form submission behavior (which causes a reload) is stopped before any other code runs.

```js
function handleSubmit(event){
    event.preventDefault();
    // rest of the code
    
}
```

Now the code inside the function handleSubmit is gonna get executed but the page won't reload as we have prevented the default behaviour of submit i.e. reloading the page.

# Classes vs Hooks in React
React originally used class components to manage state and lifecycle methods. But since React 16.8, Hooks were introduced to make function components powerful enough to replace most class-based code. Today, function components with hooks are the standard.

✅ Key Differences
| Feature           | Class Components                              | Function Components with Hooks |
| ----------------- | --------------------------------------------- | ------------------------------ |
| Syntax            | ES6 class syntax                              | JavaScript function            |
| State Management  | `this.state` and `this.setState()`            | `useState()`                   |
| Lifecycle Methods | `componentDidMount()`, `componentDidUpdate()` | `useEffect()`                  |
| `this` keyword    | Required (e.g. `this.state`, `this.props`)    | Not used                       |
| Code Reusability  | Harder — usually uses HOCs or render props    | Easier — custom hooks          |
| Readability       | More boilerplate, verbose                     | Concise and cleaner            |
| Learning Curve    | Steeper due to `this`, bindings, lifecycle    | Easier for beginners           |


🧩 Should You Learn Class Components in 2025?
👎 Not Mandatory for Most:
If you're building new apps or interviewing for modern frontend jobs, Hooks are what you should focus on.

95% of React codebases in 2025 prefer function components with hooks.

👍 Still Helpful (Optional):
Some legacy codebases still use class components.

Knowing basics of class syntax can help you read and debug older code.

