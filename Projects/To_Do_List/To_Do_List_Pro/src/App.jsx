import AppName from "./components/AppName";
import Enter from "./components/Enter";
import List1 from "./components/List1";
import List2 from "./components/List2";
import List from "./components/List";
import TodoItems from "./components/TodoItems";

function App() {

  const todoItem=[
    {
      iname:'Buy Milk',
      dueDate:"27-03-2024"
    },
    {
      iname:"Study React",
      dueDate:"28-03-2024"
    },{
      iname:"Like",
      dueDate:'Now'
    }
  ]

  return (
    <center className="todo-container">
      <AppName />
      <Enter />
      <TodoItems todoItems={todoItem}/>
    </center>
  );
}

export default App;
