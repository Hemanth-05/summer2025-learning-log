# Day 65

Today I have understood a concept in managing the component tree and its called **Lifting State Up** can't wait to get hands on knowledge. I wanted to try it but for some reason, the code sandbox is not reacting. It happens once in a while.

How to manage state of parent component from child component. Simple, in short,
1. Define state in parent
2. Define a function to change the state in parent
3. Pass the function to child via props
4. When required, trigger the function from child.

This is called Lifting State Up.