import React from "react";
import Login from "./Login";

var LoggedIn = false;

const currentTime = new Date(2021, 9, 29, 13).getHours();

function App() {
  return (
    <div className="container">
      {
      // Ternary
      /* {LoggedIn ? <h1>Welcome</h1> : <Login />} */
      // AND Operator
      // currentTime > 12 ? <h1>Why are you still working</h1> : null      
      }
    </div>
  );
}

export default App;
