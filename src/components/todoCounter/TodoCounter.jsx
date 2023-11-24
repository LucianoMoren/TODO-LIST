import React from "react";
import style from "./todocounter.module.css";

function TodoCounter({ total, completed }) {
  return (
    <div className={style.div}>
      <h1 className={style.title}>Your tasks</h1>
      <h3 className={style.subtitle}>
        Has completed {completed} of {total} tasks
      </h3>
    </div>
  );
}

export { TodoCounter };
