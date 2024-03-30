import { useRef } from "react";


// eslint-disable-next-line react/prop-types
function Enter({onNewItem}) {

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const todoDate=todoDateElement.current.value;
    onNewItem(todoName,todoDate);
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
        ></input>
      </div>
      <div className="col-3">
        <input type="date" 
          ref={todoDateElement} ></input>
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
