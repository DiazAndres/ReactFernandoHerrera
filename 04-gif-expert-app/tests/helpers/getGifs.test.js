import { string } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs", () => {
  test("should retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("one punch");
    // console.log(gifs);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
