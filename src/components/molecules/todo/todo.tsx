import { ITodo } from "@/types/tasks";
import styles from "./todo.module.css";
import { ChangeEvent, useState } from "react";
import { updateTodo, deleteTodo } from "@/pages/api/todos";

import { FiTrash2 } from 'react-icons/fi';

const Todo = (props: ITodo): JSX.Element => {
  const { id, title, done } = props;
  const [isChecked, setIsChecked] = useState(done);

  const handleCheckboxChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    await updateTodo({
      id,
      title,
      done: !isChecked,
    });
    setIsChecked(!isChecked);
    window.location.reload()
  };
  
  const handleDeleteClick = async () => {
    await deleteTodo(id); // Call your deleteTodo function here
    // You might want to update your component's state or trigger a refresh after deleting
    // For example, you could remove the todo from the list or fetch the updated list
    window.location.reload();
  };

  return (
    <div key={id} className={styles.todo}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.description}>
        {done ? "Sudah selesai" : "Belum selesai"} &nbsp;
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleCheckboxChange(e)
          }
        />
        <FiTrash2
          cursor='pointer'
          className='text-red-500'
          size={20}
          onClick={handleDeleteClick}
        />
      </div>

    </div>
  );
};

export default Todo;