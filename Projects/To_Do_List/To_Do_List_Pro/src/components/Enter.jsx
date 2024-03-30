import { useContext, useRef } from "react";
import { TodoItemsContext } from "../store/todo-items-store";


// eslint-disable-next-line react/prop-types
function Enter() {

  const {addNewItem} = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const todoDate=todoDateElement.current.value;
    addNewItem(todoName,todoDate);
  };

  return (
    <div className="container text-center">
    <form action="" onSubmit={handleAddButtonClicked} className="form">
    <div className="row">
      <div className="col-6">
        <input
          type="text"
          ref={todoNameElement}
          placeholder="Enter To-do"
          required
        ></input>
      </div>
      <div className="col-3">
        <input type="date" 
          ref={todoDateElement} 
          required></input>
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
