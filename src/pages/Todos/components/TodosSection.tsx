import React from "react";
import { TodoItem } from "../../../Entities/TodoItem";

type Props = {
  todoItens: TodoItem[];
};

function TodosSection({ todoItens }: Props) {
  return (
    <section role="list">
      {todoItens.length === 0 ? (
        <h2>Nenhuma Tarefa criada! Adicione no campo de texto abaixo:</h2>
      ) : (
        <></>
      )}
      {todoItens.map((item, index) => (
        <div role="listitem" key={index}>
          <input
            type={"checkbox"}
            checked={item.isDone}
            onChange={() => {
              item.toogleComplete();
            }}
          ></input>
          <div>{item.description}</div>
        </div>
      ))}
    </section>
  );
}

export default TodosSection;
