export type TodoData = {
  description: string;
  isDone?: boolean;
  id?: number;
};

export class TodoItem {
  description: string;
  isDone: boolean;
  id: number;

  constructor({ description, isDone, id }: TodoData) {
    this.description = description;
    this.isDone = isDone ?? false;
    this.id = id ?? 0;
  }

  toogleComplete() {
    this.isDone = !this.isDone;
  }
}

export function canCreateTodo({ description }: TodoData) {
  if (description !== "") {
    return true;
  }

  return false;
}
