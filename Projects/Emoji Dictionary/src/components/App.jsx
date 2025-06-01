import React from "react";
import Emojipedia from "../emojipedia.js";
import Entry from "./Entry.jsx";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{Emojipedia.map(CreateEntry)}</dl>
    </div>
  );
}

function CreateEntry(emojiEntry) {
  return (
    <Entry
      key={emojiEntry.id}
      name={emojiEntry.name}
      emoji={emojiEntry.emoji}
      description={emojiEntry.meaning}
    />
  );
}

export default App;
