import "./App.css";
import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import MapMethod from "./components/MapMethod";
import FoodItems from "./components/FoodItems";

const App = () => {
  let foodArr = useState(["Fruits", "Vegies", "Fish", "Meat", "Nuts"]);
  let food = foodArr[0];
  let setFood = foodArr[1];
  const buyBtn = (b) => console.log(b + " has added to cart");

  return (
    <div>
      <Container />
      <FoodItems food={food} setFood={setFood} />

      <MapMethod buyBtn={buyBtn} food={food} setFood={setFood} />
    </div>
  );
};

export default App;
