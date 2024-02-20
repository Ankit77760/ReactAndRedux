function List2() {
  let todoName = "Go To College";
  let date = "21-02-2024";
  return (
    <div>
      <div class="row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default List2;
