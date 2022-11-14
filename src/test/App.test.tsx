import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

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
});
