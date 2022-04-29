import React, { useCallback } from "react";
import { List } from "react-virtualized";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

const TodoList2 = ({ todos, onToggle, onRemove }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      return (
        <TodoListItem
          key={key}
          todo={todos[index]}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [todos, onRemove, onToggle]
  );
  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: "none" }}
    />
  );
};

export default React.memo(TodoList2);