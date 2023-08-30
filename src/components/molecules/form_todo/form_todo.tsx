import { FormEventHandler, useState } from "react";
import styles from "./form_todo.module.css";
import { addTodo, getAllTodos } from "@/pages/api/todos";

const FormTodo = (): JSX.Element => {
    const [todo, setTodo] = useState("");

    const handleSubmit: FormEventHandler<HTMLFormElement> = async(e) => { 
        e.preventDefault();
        const todo = e.currentTarget.todo.value;
        console.log(todo);
        const count = (await getAllTodos()).length;

        await addTodo({
            id: count + 1,
            title: todo,
            done: false
        });
        window.location.reload()
    }

    // Call this function when you want to refresh the data
    
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input value={todo} onChange={e => setTodo(e.target.value)} className={styles.input} type="text" name="todo" id="todo" placeholder="Masukkan todo" />
            <button className={styles.button} type="submit">Tambah</button>
        </form>
    );
};

export default FormTodo;
