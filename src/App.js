import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  return (
    <TodoTemplate>
      <TodoInput />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
