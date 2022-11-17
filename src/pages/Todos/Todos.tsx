import React, { useState } from "react";
import TextInput from "../../components/TextInput";
import TodosSection from "./components/TodosSection";
import { canCreateTodo, TodoItem } from "../../Entities/TodoItem";
import { TodoList } from "../../Entities/TodoList";
import { useSubscribeTo } from "../../hooks/useSubscribeTo";

type Props = {
  todoList: TodoList;
};

const Todos = ({ todoList }: Props) => {
  const [label, setLabel] = useState("");
  const [todoItens] = useSubscribeTo<TodoItem>(todoList);

  const handleSubmit = () => {
    const data = {
      description: label,
    };

    if (canCreateTodo(data)) {
      todoList.addItem(data);
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
