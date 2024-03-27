function List({todoName,todate}) {
  return (
    <div>
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todate}</div>
        <div className="col-2">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default List;
