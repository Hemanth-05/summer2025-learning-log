# Day25: Todo list Project

I have been busy this week so I didn't made much progress as I should. Lets continue with our learning today. Today I am going to build a todo list where we use multiple concepts that we have learned over the last few days.

## How its gonna work
### High Level

There is going to be a input field, and an add button and a list underneeth. When user types into the input field and clicks on add, the text in the input field gets added to the list.

### Low Level
When user types into the input field, for every character changed, the onChange() function is going to be triggered and the value of the input is going to be associated with a useState hook called name which is going to update frequently (Controlled component).
When user clicks on the "Add" button, we gonna associate onClick() with a function called createNewListItem, and the text is gonna be added to the list.

The concepts that I think will be used here are:

 - onchange() to track the changes in input field
 - onClick() to add the text to the list
 - Controlled components so that the react state becomes the single source of truth for the input field
 - Component and props concept to create a new list item when "Add" is clicked