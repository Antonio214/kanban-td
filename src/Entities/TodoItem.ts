export type TodoData = {
  description: string;
  isDone?: boolean;
};

export class TodoItem {
  description: string;
  isDone: boolean;

  constructor({ description, isDone }: TodoData) {
    this.description = description;
    this.isDone = isDone ?? false;
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
