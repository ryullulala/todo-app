import { useCallback, useRef, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList2 from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

const createBulkTodos = () => {
  const todos = [];
  for (let i = 1; i <= 3000; i++) {
    todos.push({ id: i, text: `할 일 #${i}`, checked: false });
  }
  return todos;
};

function App() {
  // const [todos, setTodos] = useState([
  //   { id: 1, text: "리액트 기초 알아보기", checked: true },
  //   { id: 2, text: "컴포넌트 기초 알아보기", checked: true },
  //   { id: 3, text: "일정관리 앱 구현하기", checked: false },
  // ]);
  // const nextId = useRef(4);

  const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(3001);

  // 종속리스트 제거 (값을 반환하지 않고 function 사용)
  const insertTodo = useCallback((text) => {
    setTodos((todos) =>
      todos.concat({ id: nextId.current++, text, checked: false })
    );
  }, []);
  const toggleTodo = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);
  const removeTodo = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);
  return (
    <TodoTemplate>
      <TodoInput onInsert={insertTodo} />
      <TodoList2 todos={todos} onToggle={toggleTodo} onRemove={removeTodo} />
    </TodoTemplate>
  );
}

export default App;
