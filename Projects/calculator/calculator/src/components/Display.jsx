import styles from "./Display.module.css"
const Display = ({displayValue})=>{
    return(
        <input value={displayValue} className={styles.display} type="text"  />
    )    
}
export default Display;