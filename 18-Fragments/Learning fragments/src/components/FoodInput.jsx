import { useState } from "react";
import styles from "./FoodInput.module.css";

const FoodInput = () => {
  let [textToShow, setTextState] = useState("");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // console.log(`current value of textStateArr: ${textToShow}`);

  const product = (event) => {
    let p = event.target.value;
    console.log(p);
    setTextState(p);
  };
  return (
    <div>
      <input
        className={styles.container}
        placeholder="Write Your Product"
        type="text"
        onChange={product}
      />
      <p> {textToShow} </p>
    </div>
  );
};

export default FoodInput;
