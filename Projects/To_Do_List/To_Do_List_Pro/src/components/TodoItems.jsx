import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
import List from "./List";
import styles from "./TodoItems.module.css";
const TodoItems = () => {
  
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItem;
  const deleteItem = contextObj.deleteItem;
  return (
    <>
      <div className={styles.itemContainer}>
        {todoItems.map((item) => (
          <List
          key={item.iname}
            todoName={item.iname}
            todate={item.dueDate}
            onDeleteClick={deleteItem}
          ></List>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
