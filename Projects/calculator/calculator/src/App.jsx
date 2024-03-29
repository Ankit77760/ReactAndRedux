import styles from './App.module.css'
import Display from './components/Display';
import ButtonContainer from './components/ButtonContainer';
import { useState } from 'react';

function App() {
  
  const [calVal,setCalVal] = useState("");

  const  onButtonClick = (event)=>{
    if(event.target.value==='C'){
      setCalVal("");
    }
    else if(event.target.value==="="){
      const result = eval(calVal);
      setCalVal(result);
    }
    else{
      const newDisplayValue = calVal+event.target.value;
      setCalVal(newDisplayValue);
    }
  }

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer 
        onButtonClick={onButtonClick}  
      /></div>
  )
}
export default App;