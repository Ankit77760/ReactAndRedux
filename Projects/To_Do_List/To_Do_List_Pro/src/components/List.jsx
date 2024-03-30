import styles from './List.module.css'
function List({todoName,todate,onDeleteClick}) {
  return (
    <div>
      <div className={`row ${styles.listt}`} >
        <div className="col-6">{todoName}</div>
        <div className="col-3">{todate}</div>
        <div className="col-1">
          <button className="btn btn-danger" onClick={()=>onDeleteClick(todoName)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default List;
