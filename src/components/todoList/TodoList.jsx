import React from "react";
import style from "./todolist.module.css";

function TodoList({ children }) {
  return (
    <div className={style.div}>
      <ul className={style.ul}>{children}</ul>
    </div>
  );
}

export { TodoList };
