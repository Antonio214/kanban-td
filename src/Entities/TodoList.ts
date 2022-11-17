import { ObservableList } from "./ObservableList";
import { TodoData, TodoItem } from "./TodoItem";

export class TodoList extends ObservableList<TodoItem> {
  itens: TodoItem[];

  constructor(itensData: TodoData[]) {
    super();
    this.itens = itensData.map((data) => new TodoItem(data));
  }

  addItem(data: TodoData) {
    const id = this.itens.length;
    const item = new TodoItem({ id, ...data });
    this.itens = [item, ...this.itens];
    this.notify(this.itens);
  }

  removeItem(id: number) {
    this.itens = this.itens.filter((item) => item.id !== id);
    this.notify(this.itens);
  }

  protected notify(itens: TodoItem[]) {
    super.notify(itens);
  }
}
