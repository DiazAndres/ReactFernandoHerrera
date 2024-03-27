import { getSaludo } from "../../base-pruebas/02-template-string";

describe("Pruebas en 02-template-string", () => {
  test('getSaludo debe de retornar "Hola Andres"', () => {
    const name = "Fernando";
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`);
  });
});
