import React, { useState } from "react";
import TextInput from "../../components/TextInput";
import TodosSection from "./components/TodosSection";
import { TodoItem, canCreateTodo, createTodo } from "../../Entities/TodoItem";

type Props = {
  initialData: TodoItem[];
};

const Todos = ({ initialData }: Props) => {
  const [label, setLabel] = useState("");
  const [todoItens, setTodoItens] = useState<TodoItem[]>(initialData);

  const handleSubmit = () => {
    const data = {
      description: label,
    };

    if (canCreateTodo(data)) {
      const newItem = createTodo(data);
      setTodoItens([newItem, ...todoItens]);
      setLabel("");
    }
  };

  const handleChange = (value: string) => {
    setLabel(value);
  };

  return (
    <div>
      <div className="App">
        <h1>TODO:</h1>
        <TodosSection todoItens={todoItens}></TodosSection>
        <TextInput
          value={label}
          changeCallback={handleChange}
          enterCallback={handleSubmit}
        ></TextInput>
      </div>
    </div>
  );
};

export { Todos };
