import { getImagen } from "../../base-pruebas/11-async-await";

describe("Pruebas en 11-async-await", () => {
  test("getImagen debe de retornar un URL de la imagen", async () => {
    const resp = await getImagen();
    // expect(typeof url).toBe(String);
    // catch
    expect(resp).toBe("No se encontro la imagen");
  });
});
