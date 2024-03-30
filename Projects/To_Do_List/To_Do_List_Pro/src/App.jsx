import AppName from "./components/AppName";
import Enter from "./components/Enter";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";


function App() {
  const [todoItems,setTodoItems]=useState([]);

  const addNewItem = (itemName,itemdueDate)=>{
    setTodoItems((currentValue)=>[...currentValue,{iname:itemName,dueDate:itemdueDate}])
  }

  const deleteItem = (todoItemName)=>{
    const newItems = todoItems.filter(item => item.iname != todoItemName);
    setTodoItems(newItems);
    }


  return (
    <TodoItemsContext.Provider value={{
      todoItems: todoItems,
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
