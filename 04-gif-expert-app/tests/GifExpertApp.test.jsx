import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en GifExpertApp ", () => {
  test("should validar input esta vacio", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    expect(input.value).toBe("");

    // screen.debug();
  });

  test("should agregar si no existe", () => {
    const inputValue = "Dragon ball";
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    screen.debug();

    // const {result} = renderHook(() => setCategories)
  });
});
