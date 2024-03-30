import { useState } from "react";
import TodoItems from "./TodoItems";

function Enter({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
    <form action="" onSubmit={handleAddButtonClicked} className="form">
    <div className="row">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter To-do"
          value={todoName}
          onChange={handleNameChange}
        ></input>
      </div>
      <div className="col-3">
        <input type="date" value={dueDate} onChange={handleDateChange}></input>
      </div>
      <div className="col-2">
        <button
          className=" btn btn-success"
        >
          Add ToDo
        </button>
      </div>
    </div>
    </form>
    </div>
  );
}

export default Enter;
