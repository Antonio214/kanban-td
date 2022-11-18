import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import App from "../App";

describe("Testing App component", () => {
  describe("Testing header", () => {
    it("should render heading with TODO", async () => {
      render(<App />);

      expect(screen.getByRole("heading")).toHaveTextContent("TODO:");
    });
  });

  describe("Testing TODO view", () => {
    it("should render 3 itens", async () => {
      render(<App />);

      await screen.findAllByRole("listitem");

      expect(screen.getAllByRole("listitem")).toHaveLength(3);
    });
  });

  describe("Testing input form", () => {
    it("Should render input label", async () => {
      render(<App />);

      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });
  });

  // TODO: come back here after testing TODO item
  // describe("Testing deleting data", () => {
  //   it("Should delete one item", () => {
  //     const user = userEvent.setup();
  //     render(<App />);

  //     const firstTodoItem = screen.getAllByRole("listitem")[0];

  //     console.log(within(firstTodoItem).getByRole("button"));
  //     expect(false).toBe(true);
  //   });
  // });
});
