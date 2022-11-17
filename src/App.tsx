import { Todos } from "./pages/Todos/Todos";

type Props = {};

const App = (props: Props) => {
  const data = [
    { description: "Tarefa 1", isDone: true },
    { description: "Tarefa 2", isDone: false },
    { description: "Tarefa 3", isDone: false },
  ];

  return <Todos initialData={data}></Todos>;
};

export default App;
