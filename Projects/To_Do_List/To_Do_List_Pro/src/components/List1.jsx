function List1() {
  let todoName = "Buy Milk";
  let date = "20/02/2024";
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

export default List1;
