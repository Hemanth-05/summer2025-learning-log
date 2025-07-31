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

### Execution Steps
1. We will create 2 functions, one for onChange and one for onClick. 
2. Whenever the user types into the inputs, those inputs will be directly entered as the values of  title and content keys.
3. When we click on the add button, the values that are inside the noteItem object will be added to the Notes array, and the noteItem object will get reset into have null values for both title and content.

### Components Architecture
App.jsx - This is the Main component.
CreateArea.jsx - This is the input field component which has name and content input fields and an add button.
Header.jsx - Has header
Footer.jsx - Has a copyright and year
Note.jsx - 

### Explaining steps in Detail:
#### Step One: 
	It’s a straight forward step but the only thing to keep in mind is that, we have to find a way to trigger the onChange and onClick functions from child component (CreateArea.jsx). We have to define the body of these functions in main component (App.jsx).

#### Step Two:
``` jsx
function handleChange(event) {
    const inputName = event.target.name;
    const newValue = event.target.value;
    setNoteItem((prevValue) => {
      if (inputName == "title") {
        return {
          title: newValue,
          content: prevValue.content,
        };
      } else if (inputName == "content") {
        return {
          title: prevValue.title,
          content: newValue,
        };
      }
    });
  }
  ```

#### Step Three:
``` jsx
function handleClick(event) {
    setNotes((prev) => {
      return [...prev, noteItem];
    });

    setNoteItem({
      title: "",
      content: "",
    });
  }
  ```

Until here when the user types into the input field and clicks on add, that information is getting stored in the array. Next step, we have to make sure that each noteItems in array are being displayed as notes.

To achieve that, all we had to do is this

``` jsx
function createNote(item) {
    return <Note key={1} title={item.title} content={item.content} />;
  }
{notes.map(createNote)}
```
Since we already have note component, by writing above code, we'll be displaying all the elements in the array in the form of notes

