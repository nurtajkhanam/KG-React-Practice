import React from "react";
import styles from "./components/FoodInput.module.css";

const FoodInput = ({ items, newItems }) => {
  const word = (event) => {
    if (event.key == "Enter") {
      let product = event.target.value;
      let newItem = [...items, product];
      newItems(newItem);
    }
  };

  return (
    <div>
      <input className={styles.FoodInput} type="text" onKeyDown={word} />
    </div>
  );
};

export default FoodInput;
