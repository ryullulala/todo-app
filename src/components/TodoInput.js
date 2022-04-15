import React from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInput.scss";

const TodoInput = () => {
  return (
    <form className="TodoInput">
      <input type="text" paceholder="할 일을 입력하세요." />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInput;
