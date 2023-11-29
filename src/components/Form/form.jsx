"use client";
import styles from "./form.module.css"
import {useStore} from "../../store";
import { useState } from "react";
import { Container } from "@/components/container/container";
export const Form = () => {
  const [newTodo, setNewTodo] = useState("");
  const { todos, setTodos } = useStore();

const handleAdd = () => {
    let newObj = {
      id: 10,
      todo: newTodo,
    };

    let newList = [...todos, newObj];
    setTodos(newList);
    setNewTodo("");
  };

  return (
    <Container>
    <div className={styles.formBox}>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Write Text here . . ."
      />
      <button onClick={handleAdd}>+ Add New</button>
    </div>
    </Container>
  );
};

