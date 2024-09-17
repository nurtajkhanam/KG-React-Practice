import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MapMethod from "./components/MapMethod";
import ConditionRndr from "./components/ConditionRndr";

const App = () => {
  let food = ["Seeds", "Vegetables", "Fruits", "Milk", "fish", "Meat"];
  // let food = [];
  return (
    <>
      <h2>Healthy Foods</h2>

      <MapMethod items={food} />
      <ConditionRndr items={food} />
    </>
  );
};

export default App;
