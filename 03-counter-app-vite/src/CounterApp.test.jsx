import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "./CounterApp";

describe("Pruebas en CounterApp", () => {
  const initialValue = 20;

  test("should match with snapshop", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("should shows 100 as initial value", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
    // expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
    //   "100"
    // );
  });

  test("should incrementar con el botón +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("21")).toBeTruthy();
  });

  test("should decrementar con el botón +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("19")).toBeTruthy();
  });

  test("should funcionar el botón de reset", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    // fireEvent.click(screen.getByText("Reset"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));

    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
