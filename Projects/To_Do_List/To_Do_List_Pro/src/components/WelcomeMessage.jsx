import { useContext } from 'react';
import styles from './WelcomeMessage.module.css';
import { TodoItemsContext } from '../store/todo-items-store';
const WelcomeMessage=()=>{
    const contextObj=useContext(TodoItemsContext);
    const todoItems = contextObj.todoItems;
    return( todoItems.length===0 && <h3 className={styles.h33}>Enjoy Your Day</h3>
    )
}
export default WelcomeMessage;