# Day 17 - Behaviour of submit button in forms

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

Now what if we want the handleSubmit function to get executed but prefent the default behaviour of submit button that is "Refreshing the page". Good news is we can do that.

Now inside the handleSubmit function, at the very beginning, we should call the function event.preventDefault() to prevent the page from refreshing. This ensures the default form submission behavior (which causes a reload) is stopped before any other code runs.

```js
function handleSubmit(event){
    event.preventDefault();
    // rest of the code
    
}
```

Now the code inside the function handleSubmit is gonna get executed but the page won't reload as we have prevented the default behaviour of submit i.e. reloading the page