import { useState } from "react";
import Dataprops from "./Dataprops";

const MapMethod = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (item, event) => {
    let newAddedItems = [...activeItems, item];
    setActiveItems(newAddedItems);
  };

  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <Dataprops
            key={item}
            food={item}
            bought={activeItems.includes(item)}
            handleBuyButton={(event) => onBuyButton(item, event)}
          />
        ))}
      </ul>
    </div>
  );
};

export default MapMethod;
