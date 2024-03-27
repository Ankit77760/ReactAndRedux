function Enter() {
  return (
    <div className="row">
      <div className="col-6">
        <input type="text" placeholder="Enter To-do"></input>
      </div>
      <div className="col-4">
        <input type="date"></input>
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-success">Add ToDo</button>
      </div>
    </div>
  );
}

export default Enter;
