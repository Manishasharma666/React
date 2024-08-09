import styles from "./todoitem.module.css";

export default function TodoItems({ item , todos, setTodos}) {

  function handleDelete(item){
      // console.log("delete button clicked for item:", item);
      setTodos(todos.filter((todo)=> todo !== item));
      
  }

  return(
    <div className={styles.item}>
      <div className={styles.itemName}>{item.name}
        <span>
          <button onClick={()=> handleDelete(item)} className={styles.deleteButton}>x</button>
        </span>
      </div>
      <hr className={styles.line}/>
    </div>
    
  )
}
