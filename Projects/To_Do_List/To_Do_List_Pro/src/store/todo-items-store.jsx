import { createContext,useReducer } from "react"

export const TodoItemsContext = createContext(
   { todoItem : [],
    addNewItem : () =>{},
    deleteItem :()=>{},
   });

   const todoItmesReducer = (currentToDoItems , action)=>{
    let newTodoItems = currentToDoItems;
    if(action.type ==="NEW_ITEM"){
      newTodoItems=[...currentToDoItems,
        {iname:action.payload.itemName,
          dueDate:action.payload.itemdueDate}];
    }
    else if(action.type==="DELETE_ITEM"){
      newTodoItems = currentToDoItems.filter(item => item.iname != action.payload.itemName);
    }
    return newTodoItems;
  }

const TodoItemsContextProvider = ({children})=>{
    const [todoItem,dispatchTodoItems]=useReducer(todoItmesReducer,[]);

    

    const addNewItem = (itemName,itemdueDate)=>{
      //setTodoItems((currentValue)=>[...currentValue,{iname:itemName,dueDate:itemdueDate}])
      const newItemAction = {
        type: "NEW_ITEM",
        payload:{
          itemName,
          itemdueDate
        }
      };
      dispatchTodoItems(newItemAction);
    }
  
    const deleteItem = (todoItemName)=>{
      const deleteItemAction = {
        type: "DELETE_ITEM",
        payload:{
          itemName : todoItemName,
        }
      };
      dispatchTodoItems(deleteItemAction);
  }
  return ( <TodoItemsContext.Provider value={{
    todoItem,
    addNewItem,
    deleteItem,
  }}>
    {children}
    </TodoItemsContext.Provider>
    );
  
}
export default TodoItemsContextProvider;