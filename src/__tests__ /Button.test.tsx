import { render, fireEvent, screen } from "@testing-library/react";
import Button from "../Button";
import "@testing-library/jest-dom";

describe("Button component", () => {
  test("renders with initial text", () => {
    // Arrange
    render(<Button />);

    // Assert
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });

  test("changes text after click", () => {
    // Arrange
    render(<Button />);

    // Act
    const buttonElement = screen.getByText("Click me");
    fireEvent.click(buttonElement);

    // Assert
    expect(screen.getByText("Clicked!")).toBeInTheDocument();
  });
});
