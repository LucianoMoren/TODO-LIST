import React from "react";
import { useState } from "react";
import { TodoCounter } from "./components/todoCounter/TodoCounter";
import { TodoSearch } from "./components/todoSearch/TodoSearch";
import { TodoList } from "./components/todoList/TodoList";
import { TodoItem } from "./components/todoItem/TodoItem";
import { CreateTodoButton } from "./components/createTodoButton/CreateTodoButton";
import "./App.css";

const defaultTodos = [
  { text: "Comprar utiles", completed: true },
  { text: "Ir a buscar a los niños", completed: false },
  { text: "Comprar un arma", completed: true },
  { text: "Usar el arma", completed: false },
  { text: "Comprar ropa", completed: false },
  { text: "Pagar la luz", completed: false },
  { text: "Comprar comida", completed: false },
  { text: "Comprar comida", completed: false },
  { text: "Comprar comida", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={1} total={2} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.name}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
