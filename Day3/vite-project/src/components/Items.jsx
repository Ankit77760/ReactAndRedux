import styles from "./Items.module.css";
const Items = ({ foodItems }) => {
  const handleBuyClick = (event) => {
    console.log(event);
    console.log("Buy Clicked " + `${foodItems}`);
  };

  return (
    <li className={`${styles["a-item"]} list-group-item`}>
      <span className={styles["a-span"]}>{foodItems}</span>
      <button
        className={`${styles.button} btn btn-success`}
        onClick={(event) => handleBuyClick(event)}
      >
        Buy
      </button>
    </li>
  );
};
export default Items;
