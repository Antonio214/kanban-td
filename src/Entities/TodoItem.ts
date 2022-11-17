export type TodoData = {
  description: string;
};

export type TodoItem = {
  description: string;
  isDone: boolean;
};

export function canCreateTodo({ description }: TodoData) {
  if (description !== "") {
    return true;
  }

  return false;
}

export function createTodo({ description }: TodoData): TodoItem {
  const newItem: TodoItem = {
    description: description,
    isDone: false,
  };

  return newItem;
}
