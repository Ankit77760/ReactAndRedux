import styles from "./Foodinput.module.css";
const Foodinput = ({handleOnChange}) => {
    return (
    <div className={styles.divv}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter Food Items Here"
        onChange={handleOnChange}
      />
    </div>
  );
};
export default Foodinput;
