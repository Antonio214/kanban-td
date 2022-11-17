import { render, screen } from "@testing-library/react";
import { TodoList } from "../../Entities/TodoList";
import { Todos } from "./Todos";

describe("Testing Todos Page:", () => {
  describe("Testing initial data rendering", () => {
    it("Should render 3 itens", () => {
      const mockData = { description: "Tarefa Mock" };

      const todoList = new TodoList([mockData, mockData, mockData]);

      render(<Todos todoList={todoList}></Todos>);

      expect(screen.getAllByRole("listitem")).toHaveLength(3);
    });

    it("Should render 10 itens", () => {
      const mockData = { description: "Tarefa Mock" };

      const todoList = new TodoList([
        mockData,
        mockData,
        mockData,
        mockData,
        mockData,
        mockData,
        mockData,
        mockData,
        mockData,
        mockData,
      ]);

      render(<Todos todoList={todoList}></Todos>);

      expect(screen.getAllByRole("listitem")).toHaveLength(10);
    });

    it("should render no data message as h2 tag", () => {
      const todoList = new TodoList([]);

      render(<Todos todoList={todoList}></Todos>);

      const h2Array = screen.getAllByRole("heading", { level: 2 });
      const emptyMessageArray = screen.getAllByText(
        "Nenhuma Tarefa criada! Adicione no campo de texto abaixo:"
      );

      expect(h2Array).toHaveLength(1);
      expect(emptyMessageArray).toHaveLength(1);
      expect(h2Array[0]).toEqual(emptyMessageArray[0]);
    });
  });
});
