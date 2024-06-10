import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

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

  return (
    <>
      <h1>TodoApp: {todos.length + 10} <small>pendientes: ({todos.length})</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            {todos.map((todo) => (
              <li
                className="list-group-item d-flex justify-content-between"
                key={todo.id}
              >
                <span className="align-self-center">{todo.description}</span>
                <button className="btn btn-danger">Borrar</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form>
            <input
              type="text"
              placeholder="¿Qué hay que hacer?"
              className="form-control"
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};