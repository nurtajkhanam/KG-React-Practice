import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MapMethod from "./components/MapMethod";
import ConditionRndr from "./components/ConditionRndr";
import Container from "./components/Container";

const App = () => {
  let food = ["Seeds", "Vegetables", "Fruits", "Milk", "fish", "Meat"];
  // let food = [];
  return (
    <Container>
      <Container>
        <h2 className="food-heading">Healthy Foods</h2>
      </Container>

      <MapMethod items={food} />
      <ConditionRndr items={food} />
    </Container>
  );
};

export default App;
