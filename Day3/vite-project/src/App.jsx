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
  return (
    <Container>
      <Container>
        <Header />
      </Container>
      <Foodinput />
      <ErrorMessage foodItems={foodItems} />
      <FoodItems foodItems={foodItems} />
    </Container>
  );
}

export default App;
