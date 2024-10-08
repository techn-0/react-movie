import { useState, useEffect } from "react";

function Hello() {
  function DestroyedFn() {
    console.log("Destroyed");
  }
  function CreatedFn() {
    console.log("Created");
    return DestroyedFn;
  }
  useEffect(CreatedFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
