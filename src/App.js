import { useCallback, useRef, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 기초 알아보기", checked: true },
    { id: 2, text: "컴포넌트 기초 알아보기", checked: true },
    { id: 3, text: "일정관리 앱 구현하기", checked: false },
  ]);

  const nextId = useRef(4);
  const insertTodo = useCallback(
    (text) => {
      setTodos(todos.concat({ id: nextId.current++, text, checked: false }));
    },
    [todos]
  );
  const toggleTodo = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );
  const removeTodo = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );
  return (
    <TodoTemplate>
      <TodoInput onInsert={insertTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onRemove={removeTodo} />
    </TodoTemplate>
  );
}

export default App;
