import React from "react";
import style from "./todoitem.module.css";
import { BsCheckLg, BsX } from "react-icons/bs";
function TodoItem(props) {
  return (
    <li className={style.li}>
      <div className={style.left}>
        <span className={style.span}>
          <BsCheckLg className={style.check} />
          {props.completed}
        </span>
      </div>
      <p className={style.p}>{props.text}</p>
      <div className={style.right}>
        <span className={style.span}>
          <BsX className={style.delete} />
        </span>
      </div>
    </li>
  );
}

export { TodoItem };
