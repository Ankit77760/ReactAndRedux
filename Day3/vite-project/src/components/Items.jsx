import styles from "./Items.module.css";
const Items = ({ foodItems,bought,handleBuyButton }) => {
  const handleBuyClick = (event) => {
    console.log(event);
    console.log("Buy Clicked " + `${foodItems}`);
  };

  return (
    <li className={`${styles["a-item"]} list-group-item ${bought && "active"}`}>
      <span className={styles["a-span"]}>{foodItems}</span>
      <button
        className={`${styles.button} btn btn-success `}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Items;
