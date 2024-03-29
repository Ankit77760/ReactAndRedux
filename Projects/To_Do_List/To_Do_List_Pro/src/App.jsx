import AppName from "./components/AppName";
import Enter from "./components/Enter";
import List1 from "./components/List1";
import List2 from "./components/List2";
import List from "./components/List";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems,setTodoItems]=useState([]);

  const handleNewItem = (itemName,itemdueDate)=>{
    const newTodoItems= [...todoItems,{iname:itemName,dueDate:itemdueDate}];
    setTodoItems(newTodoItems);
  }

  const handleDeleteItem = (todoItemName)=>{
    const newItems = todoItems.filter(item => item.iname != todoItemName);
    setTodoItems(newItems);
    }

  return (
    <center className="todo-container">
      <AppName />
      <Enter onNewItem={handleNewItem}/>
      {todoItems.length===0 && <WelcomeMessage />} 
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
    </center>
  )
}

export default App;
