import "./todo-list.css";
const TodoList = (props) => {
  return (
    <ul>
      {props.dataTodos.map((todos) => {
        return (
          <li key={todos.id}>
            {todos.title} {todos.button}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
