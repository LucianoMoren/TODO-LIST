import React from "react";
import style from "./todocounter.module.css";

function TodoCounter({ total, completed }) {
  return (
    <div className={style.div}>
      <h3 className={style.title}>
        Has completed {completed} of {total} tasks
      </h3>
    </div>
  );
}

export { TodoCounter };
