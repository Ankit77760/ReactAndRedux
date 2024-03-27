import styles from "./Items.module.css"
const Items=({foodItems})=>{
    return(
        <li className={styles['a-item']}>
            <span className={styles['a-span']}>
                {foodItems}
            </span>
        </li>
    )
}
export default Items;