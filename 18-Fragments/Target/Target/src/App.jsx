import { useState } from "react";
import "./App.css";

function App() {
  // const [value, setValue] = useState("");
  const change = (event) => {
    const v = event.target.value;
    console.log(v);
  };

  return (
    <>
      <input
        className="inputBox"
        type="text"
        placeholder="write here"
        onChange={change}
      />
    </>
  );
}

export default App;
