export type TodoData = {
  description: string;
};

export class TodoItem {
  description: string;
  isDone: boolean;

  constructor({ description }: TodoData) {
    this.description = description;
    this.isDone = false;
  }
}

export function canCreateTodo({ description }: TodoData) {
  if (description !== "") {
    return true;
  }

  return false;
}
