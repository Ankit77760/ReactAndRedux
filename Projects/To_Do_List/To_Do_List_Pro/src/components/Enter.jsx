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

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="row">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter To-do"
          value={todoName}
          onChange={handleNameChange}
        ></input>
      </div>
      <div className="col-4">
        <input type="date" value={dueDate} onChange={handleDateChange}></input>
      </div>
      <div className="col-2">
        <button
          type="submit"
          className="btn btn-success"
          onClick={handleAddButtonClicked}
        >
          Add ToDo
        </button>
      </div>
    </div>
  );
}

export default Enter;
