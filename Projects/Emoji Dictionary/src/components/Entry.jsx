import React from "react";
import DictionaryDescription from "./DictionaryDescription.jsx";
import DictionaryTerm from "./DictionaryTerm.jsx";

function Entry(props) {
  return (
    <div className="term">
      <DictionaryTerm name={props.name} emoji={props.emoji} />
      <DictionaryDescription description={props.description} />
    </div>
  );
}

export default Entry;
