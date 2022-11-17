import { Observable } from "./Observable";
import { TodoData, TodoItem } from "./TodoItem";

export class TodoList extends Observable {
  itens: TodoItem[];

  constructor(itensData: TodoData[]) {
    super();
    this.itens = itensData.map((data) => new TodoItem(data));
  }

  addItem(data: TodoData) {
    const item = new TodoItem(data);
    this.itens = [item, ...this.itens];
  }
}
