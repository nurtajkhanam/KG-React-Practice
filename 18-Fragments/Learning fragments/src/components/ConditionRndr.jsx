import React from "react";

const ConditionRndr = (items) => {
  // let food = [];
  // let food = ["Seeds", "Vegetables", "Fruits", "Milk","fish", "Meat"];
  //  let hungry = food.length === 0 ? <h4>i am still hungry</h4> : null;

  return (
    <>
      {/* <h2>Healthy Foods</h2> */}
      {items.length == 0 && <h4>i am hungry</h4>}
      {/* <ul className="list-group">
        {food.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default ConditionRndr;
