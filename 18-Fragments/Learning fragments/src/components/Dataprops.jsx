import styles from "./Dataprops.module.css";

const Dataprops = (props) => {
  let { food } = props;
  return (
    <li className={`${styles.tajItem} list-group-item`}>
      <span className={styles.tajSpan}>{food}</span>

      <button className={`${styles.button} btn btn-info`}>Buy</button>
    </li>
  );
};

export default Dataprops;
