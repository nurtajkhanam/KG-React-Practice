import { useState } from "react";
import "./App.css";

function App() {
  // const [value, setValue] = useState("");
  const change = (event) => {
    const v = event.target.value;
    console.log(v);
  };

  // let [food, setFood] = useState(["chicken", "vegetable", "Soup"]);
  let food = ["rice", "dal", "fish"];
  const v = (event) => {
    if (event.key == "Enter") {
      let newFood = event.target.value;
      let newItem = [...food, newFood];
      setFood(newItem);
    }
  };

  return (
    <>
      <input
        className="inputBox"
        type="text"
        placeholder="write here"
        onChange={change}
        // onKeyDown={v}
      />
      <div>
        <p>Meat</p>
        <h2>Food items:</h2>
        <ul>
          {food.map((i) => {
            <li>{i}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
