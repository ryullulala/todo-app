import React, { useCallback } from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "./TodoListItem.scss";
import cn from "classnames";

const TodoListItem = ({ todo, onToggle, onRemove }) => {
  const toggleHandler = useCallback(() => {
    onToggle(todo.id);
  }, [todo, onToggle]);

  const removeHandler = useCallback(() => {
    onRemove(todo.id);
  }, [todo, onRemove]);
  return (
    <div className="TodoListItem">
      <div
        className={cn("checkbox", { checked: todo.checked })}
        onClick={toggleHandler}
      >
        {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{todo.text}</div>
      </div>
      <div className="remove" onClick={removeHandler}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
