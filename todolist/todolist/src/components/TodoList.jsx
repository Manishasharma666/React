import TodoItems from "./TodoItems";
import styles from "./todolist.module.css";


export default function({todos, setTodos}){
    return <div className={styles.list}>
        {todos.map((item) => {
            return <TodoItems key={item.name} item={item} todos={todos} setTodos={setTodos}/>
        })}
    </div>
}