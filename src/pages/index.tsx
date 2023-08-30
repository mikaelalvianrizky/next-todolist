import { useState, useEffect } from "react";
import Head from "next/head";
import Todo from "@/components/molecules/todo";
import styles from "./index.module.css";
import FormTodo from "@/components/molecules/form_todo";
import { getAllTodos } from "./api/todos";
import { ITodo } from "@/types/tasks";

const Home = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todosData: ITodo[] = await getAllTodos();
      setTodos(todosData);
    };

    fetchTodos();
  }, []);

  return (
    <>
      <Head>
        <title>Eureka - Frontend Boilerplate</title>
        <meta
          name="description"
          content="Eureka Frontend Boilerplate"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FormTodo />
      <section className={styles.todos}>
        {todos.map((todo) => (
          <div key={todo.id} className={styles.todo}>
            <Todo {...todo} />
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;