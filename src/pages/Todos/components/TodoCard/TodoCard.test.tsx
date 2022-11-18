import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { TodoItem } from "../../../../Entities/TodoItem";
import TodoCard from "./TodoCard";
import userEvent from "@testing-library/user-event";

const mockDelete = jest.fn((x) => {});
const mockChange = jest.fn();
const mockTodo = new TodoItem({ description: "teste", isDone: false, id: 0 });

describe("Testing Todo Card component", () => {
  describe("Testing delete button", () => {
    it("Should have a delete button", () => {
      render(
        <TodoCard
          itemData={mockTodo}
          deleteCallback={mockDelete}
          changeCallback={mockChange}
        ></TodoCard>
      );

      const deleteButton = screen.getByRole("button");
      expect(deleteButton).toBeInTheDocument();
    });

    it("Should active callback on click", async () => {
      const user = userEvent.setup();
      render(
        <TodoCard
          deleteCallback={mockDelete}
          changeCallback={mockChange}
          itemData={mockTodo}
        ></TodoCard>
      );

      const deleteButton = screen.getByRole("button");
      await user.click(deleteButton);

      expect(mockDelete).toBeCalledWith(0);
    });
  });

  describe("Testing description render", () => {
    it("Should render item text", () => {
      //ToDo: Add test here
      expect(true).toBe(false);
    });
  });
});
