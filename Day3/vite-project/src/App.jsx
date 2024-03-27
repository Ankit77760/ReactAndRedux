import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FoodItems from "./components/FoodItems";
import Header from "./components/Header";
import ErrorMessage from "./components/ErrorMessage";
import './App.css'

function App() {
  let foodItems=['apple','orange','grapes','cherry'];
  //let foodItems = [];
  return (
    <>
      <Header />
      <ErrorMessage foodItems={foodItems}/>
      <FoodItems foodItems={foodItems}/>
    </>
  );
}

export default App;
