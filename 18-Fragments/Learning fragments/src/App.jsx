import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MapMethod from "./components/MapMethod";
import ConditionRndr from "./components/ConditionRndr";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

const App = () => {
  let food = ["Seeds", "Vegetables", "Fruits", "Milk", "fish", "Meat", "Nuts"];

  return (
    <Container>
      <Container>
        <h2 className="food-heading">Healthy Foods</h2>
        <FoodInput />
      </Container>
      <ConditionRndr items={food} />
      <MapMethod items={food} />
    </Container>
  );
};

export default App;
