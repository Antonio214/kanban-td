import React, { useState } from "react";
import TextInput from "../../components/TextInput";
import TodosSection from "./components/TodosSection";
import { TodoItem, canCreateTodo } from "../../Entities/TodoItem";
import { TodoList } from "../../Entities/TodoList";

type Props = {
  initialData: TodoList;
};

const Todos = ({ initialData }: Props) => {
  const [label, setLabel] = useState("");
  const [todoItens, setTodoItens] = useState<TodoList>(initialData);

  const handleSubmit = () => {
    const data = {
      description: label,
    };

    if (canCreateTodo(data)) {
      todoItens.addItem(data);
      setTodoItens(todoItens);
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
        <TodosSection todoItens={todoItens.itens}></TodosSection>
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
