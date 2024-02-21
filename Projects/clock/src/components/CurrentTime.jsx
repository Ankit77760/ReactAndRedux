function Currenttime() {
  let time = new Date();

  return (
    <p className="lead">
      <h2>Current Time is: {time.toTimeString()}</h2>
      <h2>Current Date is: {time.toDateString()}</h2>
    </p>
  );
}

export default Currenttime;
