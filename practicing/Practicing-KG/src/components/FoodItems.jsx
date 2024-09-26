import React from "react";
import styles from "./FoodItems.module.css";

const FoodItems = ({ food, setFood }) => {
  const addFood = (event) => {
    if (event.key == "Enter") {
      let newFood = event.target.value;
      let totalFood = [...food, newFood];
      setFood(totalFood);
      console.log(newFood);
    }
  };
  return (
    <div>
      <input
        onKeyDown={addFood}
        className={styles.inputBox}
        type="text"
        placeholder="Type here"
      />

      <button className={`${styles.searchBtn} btn btn-warning`}>Add</button>
    </div>
  );
};

export default FoodItems;
