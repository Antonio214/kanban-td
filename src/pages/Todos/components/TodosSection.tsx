import React from "react";
import { TodoItem } from "../../../Entities/TodoItem";
import TodoCard from "./TodoCard/TodoCard";

type Props = {
  todoItens: TodoItem[];
  deleteCallback: (id: number) => void;
};

function TodosSection({ todoItens, deleteCallback }: Props) {
  return (
    <section role="list">
      {todoItens.length === 0 ? (
        <h2>Nenhuma Tarefa criada! Adicione no campo de texto abaixo:</h2>
      ) : (
        <></>
      )}
      {todoItens.map((item, index) => (
        <div role="listitem" key={index}>
          <TodoCard
            itemData={item}
            deleteCallback={deleteCallback}
            changeCallback={() => {}}
          ></TodoCard>
        </div>
      ))}
    </section>
  );
}

export default TodosSection;
