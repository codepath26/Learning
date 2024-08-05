import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const todosHander = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, { id: new Date().getTime(), todo: todo }]);
    setTodo("");
  };
  const removeHandler = (id) => {
    console.log(id);
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  };
  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={todosHander}>
        <input
          type="text"
          className="border border-black"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="bg-gray-100 px-2 border border-gray-600 ms-2"
          type="submit"
        >
          Add Todo
        </button>
      </form>
      <ul>
        {todos?.map((item) => {
          return (
            <li
              className="list-none cursor-pointer mt-4 border border-black "
              key={item.id}
              onClick={() => removeHandler(item.id)}
            >
              {item.todo}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
