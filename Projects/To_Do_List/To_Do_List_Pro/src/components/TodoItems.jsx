import List from "./List";
import styles from "./TodoItems.module.css"
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.itemContainer}>
        {todoItems.map(item=>
            <List todoName={item.iname} todate={item.dueDate}></List>
        )}
      </div>
    </>
  );
};

export default TodoItems;
