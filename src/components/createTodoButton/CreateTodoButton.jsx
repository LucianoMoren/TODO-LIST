import React from "react";
import style from "./createtodobutton.module.css";
import { BsPlus } from "react-icons/bs";

function CreateTodoButton() {
  return (
    <div className={style.div}>
      <button type="button" className={style.button}>
        <BsPlus className={style.icon} />
      </button>
    </div>
  );
}

export { CreateTodoButton };
