import React from "react";
import style from "./todosearch.module.css";
function TodoSearch() {
  return (
    <div className={style.div}>
      <input placeholder="search" className={style.input}></input>
    </div>
  );
}

export { TodoSearch };
