import AppName from "./components/AppName";
import Enter from "./components/Enter";
import List from "./components/List";
import List2 from "./components/List2";


function App() {
  return (
    <center className="todo-container">
      <AppName />
      <div class="container text-center">
        <Enter />
        <List />
        <List2 />
      </div>
    </center>
  );
}

export default App;
