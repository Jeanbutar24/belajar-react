import "./todo-create.css";

const TodoCreate = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 100000) + 1,
      title: "Jean",
      button: <button>delete</button>,
    };
    props.onCreateEventTodo(newTodo);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text"></input>
      <button>Add</button>
    </form>
  );
};

export default TodoCreate;
