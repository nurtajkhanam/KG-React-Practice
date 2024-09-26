import React from "react";
import styles from "./MapMethod.module.css";

const MapMethod = ({ food, buyBtn }) => {
  return (
    <div>
      <ul className={`${styles.listContainer} list-group`}>
        {food.map((item) => (
          <li className={`${styles.listItem} list-group-item`}>
            <span>{item} </span>

            <button
              onClick={() => {
                buyBtn(item);
              }}
              className={`${styles.button} btn btn-info`}
            >
              Buy
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapMethod;
