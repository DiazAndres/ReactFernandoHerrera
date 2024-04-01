import { render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe("Pruebas en FirstApp", () => {
  const title = "Hola, Soy Goku";
  const subTitle = "Soy un subtitulo";
  // test("should hacer match con el snapshot", () => {
  //   const { container } = render(<FirstApp title={title} />);
  //   expect(container).toMatchSnapshot();
  // });

  test('should mostrar el mensaje "Hola, Soy Goku"', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("should mostrar el title en un h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("should mostrar subTitle by props", () => {
    render(<FirstApp title={title} subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});
