import styles from "./FoodInput.module.css";

const FoodInput = () => {
  const handleOnChange = (event) => {
    const word = event.target.value;
    console.log(word);
  };
  return (
    <div>
      <input
        className={styles.container}
        placeholder="Write Your Product"
        type="text"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default FoodInput;
