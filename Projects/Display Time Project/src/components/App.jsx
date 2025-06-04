import React, { useState } from "react";

function App() {
  const currentTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(currentTime);

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }

  function getTime() {
    console.log(time);
  }

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
