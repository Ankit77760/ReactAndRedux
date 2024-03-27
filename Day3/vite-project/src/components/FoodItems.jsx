import Items from "./Items";
const FoodItems = ({foodItems}) => {
    return(
        <>
            {foodItems.length===0 && <h3>I am still hungry</h3>}
            <ul className="list-group">
                {foodItems.map((item) => (
                    <Items key={item} foodItems={item}/>
                ))}
            </ul>
        </>
    )
};

export default FoodItems;
