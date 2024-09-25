import styles from "./Dataprops.module.css";

const Dataprops = ({ food, handleBuyButton }) => {
  // const handleBuyButton = () => {
  //   console.log(`${food} being bought`);
  //   // console.log(e);
  // };

  return (
    <li className={`${styles.tajItem} list-group-item`}>
      <span className={styles.tajSpan}>{food}</span>

      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Dataprops;
