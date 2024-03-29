import styles from "./Foodinput.module.css";
const Foodinput = ({handleKeyDown}) => {
    return (
    <div className={styles.divv}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter Food Items Here"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
export default Foodinput;
