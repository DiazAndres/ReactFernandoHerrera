import { usContext } from "../../base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses-obj", () => {
  test("usContext debe de retornar un objeto", () => {
    const clave = "58412";
    const edad = 24;
    const test = usContext({ clave, edad });
    console.log(test);
    expect(test).toStrictEqual({
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
