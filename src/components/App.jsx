import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(detail) {
  return (<Entry
    key={detail.id}
    name={detail.name}
    meaning={detail.meaning}
    emoji={detail.emoji}
  />)
};

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
