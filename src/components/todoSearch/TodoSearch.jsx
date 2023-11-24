import React, { useState } from "react";
import style from "./todosearch.module.css";

function TodoSearch() {
  return (
    <div className={style.div}>
      <input
        placeholder="search"
        value={searchValue}
        className={style.input}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      ></input>
    </div>
  );
}

export { TodoSearch };
