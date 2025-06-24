# Note Taker App

This is a basic note taker app. It has the following functionalities:

## On a High Level
 - Write a note with title and content
 - A "Add" buttton which lets you add it to the notes
 - A "Delete" button which lets you delete notes

## On a Low Level
 - First we have to make sure when user is typing into the title of text area, its being read by the app, for that we are using the onChange property.
 - When the user clicks on "Add" button, the title and content should be added to an array which will then be displayed on the screen in a saperate note component.
 - When the user clicks on "Delete", the note with the title and content should be removed from the array, and once it gets removed, the note component that has all the notes should be re-rendered to make sure it displays only the contents that are inside the array.