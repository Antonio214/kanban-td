import { TodoData, TodoItem } from "./TodoItem";

export class TodoList {
  itens: TodoItem[];

  constructor(itensData: TodoData[]) {
    this.itens = itensData.map((data) => new TodoItem(data));
  }

  addItem(data: TodoData) {
    const item = new TodoItem(data);
    this.itens = [item, ...this.itens];
  }
}
