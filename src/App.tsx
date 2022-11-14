import {
  ChangeEventHandler,
  FormEventHandler,
  KeyboardEventHandler,
  useState,
} from "react";

function App() {
  const data = [
    { description: "Tarefa 1", done: true },
    { description: "Tarefa 2", done: false },
    { description: "Tarefa 3", done: false },
  ];

  const [label, setLabel] = useState("");
  const [todoItens, setTodoItens] = useState(data);

  const handleSubmit: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      const newItem = {
        description: label,
        done: false,
      };

      setTodoItens([newItem, ...todoItens]);
      setLabel("");
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setLabel(event.target.value);
  };

  return (
    <div className="App">
      <h1>TODO:</h1>
      {todoItens.map((item, index) => (
        <div key={index}>
          <input type={"checkbox"} checked={item.done}></input>
          <div>{item.description}</div>
        </div>
      ))}
      <input
        value={label}
        onChange={handleChange}
        onKeyUp={handleSubmit}
        type={"text"}
      />
    </div>
  );
}

export default App;
