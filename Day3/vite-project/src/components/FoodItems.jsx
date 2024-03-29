import { useState } from "react";
import Items from "./Items";
const FoodItems = ({ foodItems }) => {
  
  let [activeItems,setActiveItems] = useState([]);

  let onBuyButton = (item,event) =>{
    let newItems=[...activeItems,item];
    setActiveItems(newItems);
  }
  
  return (
    <>
      <ul className="list-group">
        {foodItems.map((item) => (
          <Items
            key={item}
            foodItems={item}
            bought={activeItems.includes(item)}
            handleBuyButton={(event) => onBuyButton(item,event)}
          />
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
