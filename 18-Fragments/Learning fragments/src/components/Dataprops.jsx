import styles from "./Dataprops.module.css";

const Dataprops = ({ food, handleBuyButton, bought }) => {
  // const handleBuyButton = () => {
  //   console.log(`${food} being bought`);
  //   // console.log(e);
  // };

  return (
    <li className={`${styles.tajItem} list-group-item ${bought && "active"}`}>
      <span className={styles.tajSpan}>{food}</span>

      <button
        onClick={handleBuyButton}
        className={`${styles.button} btn btn-info`}
      >
        Buy
      </button>
    </li>
  );
};

export default Dataprops;
