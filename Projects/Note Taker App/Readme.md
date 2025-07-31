# Note Taker App

This is a basic note taker app. It has the following functionalities:

## On a High Level
 - Write a note with title and content
 - A "Add" buttton which lets you add it to the notes
 - A "Delete" button which lets you delete notes

## On a Low Level
 
### Overview
- We have 2 inputs with names title and content. 
- The goal is to create 2 state variables to hold values. One would be an object with keys title and content to hold the values we enter into the input fields. The name of this variable is noteItem.
- The second state variable will be the array that holds all the objects. This is where all the notes are saved. We give this variable a name Notes.

``` jsx
const [notes, setNotes] = useState([]);
  const [noteItem, setNoteItem] = useState({
    title: "",
    content: "",
  });
  ```
This above is the code for the state variables.