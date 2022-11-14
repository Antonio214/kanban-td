import {
  ChangeEventHandler,
  FormEventHandler,
  KeyboardEventHandler,
  ReactElement,
  useState,
} from "react";

import React from "react";

type Props = {};

const App = (props: Props) => {
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
      <section role="list">
        {todoItens.map((item, index) => (
          <div role="listitem" key={index}>
            <input
              type={"checkbox"}
              checked={item.done}
              onChange={() => {}}
            ></input>
            <div>{item.description}</div>
          </div>
        ))}
      </section>
      <input
        value={label}
        onChange={handleChange}
        onKeyUp={handleSubmit}
        type={"text"}
      />
    </div>
  );
};

export default App;
