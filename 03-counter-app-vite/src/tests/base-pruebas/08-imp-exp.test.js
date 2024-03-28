import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe de retornar un héroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("getHeroeById debe de retornar undefined si no existe", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  //Tarea
  //   Debe de retornar un arreglo con los héroes de DC
  //Length ===3
  //toEqual al arreglo filtrado
  test("getHeroeByOwner debe de retornar héroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    // expect(heroes.length).toEqual(3);
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });

  //debe de retonar un arreglo con los héroes de Marvel
  //length ===2
  test("getHeroeByOwner debe de retornar héroes de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    // expect(hero.length).toEqual(2);
    expect(heroes).toHaveLength(2);

  });
});
