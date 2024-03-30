import AppName from "./components/AppName";
import Enter from "./components/Enter";
import TodoItems from "./components/TodoItems";
import { useState ,useReducer} from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider, { TodoItemsContext } from "./store/todo-items-store";



function App() {
  //const [todoItems,setTodoItems]=useState([]);
  return (
   <TodoItemsContextProvider>
    <center className="todo-container">
      <AppName />
      <Enter />
      <WelcomeMessage/> 
      <TodoItems />
    </center>
    </TodoItemsContextProvider>
  )
}

export default App;
