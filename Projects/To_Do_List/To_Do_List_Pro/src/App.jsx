import AppName from "./components/AppName";
import Enter from "./components/Enter";
import TodoItems from "./components/TodoItems";
import { useState ,useReducer} from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItmesReducer = (currentToDoItems , action)=>{
  let newTodoItems = currentToDoItems;
  if(action.type ==="NEW_ITEM"){
    newTodoItems=[...currentToDoItems,
      {iname:action.payload.itemName,
        dueDate:action.payload.itemdueDate}];
  }
  else if(action.type==="DELETE_ITEM"){
    newTodoItems = currentToDoItems.filter(item => item.iname != action.payload.itemName);
  }
  return newTodoItems;
}

function App() {
  //const [todoItems,setTodoItems]=useState([]);
  const [todoItem,dispatchTodoItems]=useReducer(todoItmesReducer,[]);

  const addNewItem = (itemName,itemdueDate)=>{
    //setTodoItems((currentValue)=>[...currentValue,{iname:itemName,dueDate:itemdueDate}])
    const newItemAction = {
      type: "NEW_ITEM",
      payload:{
        itemName,
        itemdueDate
      }
    };
    dispatchTodoItems(newItemAction);
  }

  const deleteItem = (todoItemName)=>{
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload:{
        itemName : todoItemName,
      }
    };
    dispatchTodoItems(deleteItemAction);
}


  return (
    <TodoItemsContext.Provider value={{
      todoItem: todoItem,
      addNewItems:addNewItem,
      deleteItem:deleteItem,
    }}>
    <center className="todo-container">
      <AppName />
      <Enter />
      <WelcomeMessage/> 
      <TodoItems />
    </center>
    </TodoItemsContext.Provider>
  )
}

export default App;
