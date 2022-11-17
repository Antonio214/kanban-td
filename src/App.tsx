import { TodoItem } from "./Entities/TodoItem";
import { Todos } from "./pages/Todos/Todos";

type Props = {};

const App = (props: Props) => {
  const data: TodoItem[] = [
    new TodoItem({ description: "Tarefa 1", isDone: true }),
    new TodoItem({ description: "Tarefa 2", isDone: false }),
    new TodoItem({ description: "Tarefa 3", isDone: false }),
  ];

  return <Todos initialData={data}></Todos>;
};

export default App;
