import { TodoList } from "./Entities/TodoList";
import { Todos } from "./pages/Todos/Todos";

type Props = {};

const App = (props: Props) => {
  const todoList: TodoList = new TodoList([
    { description: "Tarefa 1", isDone: true },
    { description: "Tarefa 2", isDone: false },
    { description: "Tarefa 3", isDone: false },
  ]);

  return <Todos todoList={todoList}></Todos>;
};

export default App;
