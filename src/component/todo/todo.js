import TodoList from "../todo-list/todo-list";
import TodoCreate from "../todo-create/todo-create";
import { useState } from "react";
import "./todo.css";

const Todo = () => {
  const [getTodos, setTodos] = useState([
    { id: 1, title: "jean" },
    { id: 2, title: "Habel" },
    { id: 3, title: "Butar" },
    { id: 4, title: "Butar" },
  ]);
  const createEventTodo = (todo) => {
    setTodos(getTodos.concat(todo));
    console.log(getTodos);
  };

  return (
    <div className="todo">
      <h2>Todo list</h2>
      <TodoCreate onCreateEventTodo={createEventTodo} />
      <TodoList dataTodos={getTodos} />
    </div>
  );
};

export default Todo;
