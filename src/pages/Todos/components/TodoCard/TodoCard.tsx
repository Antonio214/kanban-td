import React from "react";
import { TodoItem } from "../../../../Entities/TodoItem";

type Props = {
  itemData: TodoItem;
  changeCallback: () => void;
  deleteCallback: (id: number) => void;
};

function TodoCard({ itemData, changeCallback, deleteCallback }: Props) {
  return (
    <>
      <input
        type={"checkbox"}
        checked={itemData.isDone}
        onChange={() => changeCallback()}
      />
      <div>{itemData.description}</div>
      <button onClick={() => deleteCallback(itemData.id)}>Remover</button>
    </>
  );
}

export default TodoCard;
