import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initalState = [
  {
    id: new Date().getTime(),
    description: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Recolectar la piedra del alma",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initalState);

  const handleNewTodo = (todo) => {
    console.log(todo);
  };

  return (
    <>
      <h1>
        TodoApp: {todos.length + 10} <small>pendientes: ({todos.length})</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo}/>
        </div>
      </div>
    </>
  );
};
