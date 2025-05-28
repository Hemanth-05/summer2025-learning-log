import React from "react";
import Card from "./Card";
import Contacts from "../contacts.js";

function App(props) {
  return (
    <>
      <h1 className="heading">My Contacts</h1>
      <Card Details={Contacts[0]} />
      <Card Details={Contacts[1]} />
      <Card Details={Contacts[2]} />
    </>
  );
}

export default App;
