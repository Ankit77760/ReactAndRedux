import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FoodItems from "./components/FoodItems";
import Header from "./components/Header";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput";

function App() {
  let foodItems = ["apple", "orange", "grapes", "cherry"];
  //let foodItems = [];
  
  let textToShow = "Food Item Entered By User";

  const handleOnChange=(event)=>{
    console.log(event.target.value)
    textToShow = event.target.value
  }

  return (
    <Container>
      <Container>
        <Header />
      </Container>
      
      <Foodinput handleOnChange={handleOnChange} />
      <p>{textToShow}</p>
      <ErrorMessage foodItems={foodItems} />
      <FoodItems foodItems={foodItems} />
    </Container>
  );
}

export default App;
