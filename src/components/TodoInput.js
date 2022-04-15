import React, { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInput.scss";

const TodoInput = ({ onInsert }) => {
  const [text, setText] = useState("");

  const changeHandler = useCallback((event) => {
    setText(event.target.value);
  }, []);

  const submitHandler = useCallback(
    (event) => {
      event.preventDefault();
      onInsert(text);
      setText("");
    },
    [text, onInsert]
  );

  return (
    <form className="TodoInput" onSubmit={submitHandler}>
      <input
        type="text"
        value={text}
        placeholder="할 일을 입력하세요."
        onChange={changeHandler}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInput;
