import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MapMethod from "./components/MapMethod";
import ConditionRndr from "./components/ConditionRndr";
import Container from "./components/Container";
import { useState } from "react";
import FoodInput from "./FoodInput";

const App = () => {
  let foodArr = useState(["Seeds", "Vegetables", "Fruits", "Milk"]);
  // let foodArr = useState();
  let food = foodArr[0];
  let setFood = foodArr[1];

  return (
    <Container>
      <Container>
        <h2 className="food-heading">Healthy Foods</h2>
        <FoodInput items={food} newItems={setFood} />
      </Container>
      <ConditionRndr items={food} />
      <MapMethod items={food} />
    </Container>
  );
};

export default App;
