import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FoodItems from "./components/FoodItems";
import Header from "./components/Header";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput";
import { useState } from "react";

function App() {
 // let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if(event.key==="Enter"){
      let currFoodItem=event.target.value;  
      let newItems=[...foodItems,currFoodItem];
      setFoodItems(newItems);
      console.log("The Food Item Entered is: "+currFoodItem);
    }
     // console.log(event.target.value);
      //setTextState(event.target.value);
  };

  return (
    <Container>
      <Container>
        <Header />
      </Container>
      <ErrorMessage foodItems={foodItems} />
      <Foodinput handleKeyDown={onKeyDown} />
      <FoodItems foodItems={foodItems} />
    </Container>
  );
}

export default App;
