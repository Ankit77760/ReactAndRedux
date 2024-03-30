import AppName from "./components/AppName";
import Enter from "./components/Enter";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems,setTodoItems]=useState([]);

  const handleNewItem = (itemName,itemdueDate)=>{
    setTodoItems((currentValue)=>[...currentValue,{iname:itemName,dueDate:itemdueDate}])
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
