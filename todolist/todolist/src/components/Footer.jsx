import styles from "./footer.module.css"


export default function Footer({completedTodos, totalTodos}){
    return <div className={styles.footer}>
        <span className={styles.item}>completed todos are : {completedTodos}</span>
        <span className={styles.item}>Total todos are : {totalTodos}</span>
    </div>
}