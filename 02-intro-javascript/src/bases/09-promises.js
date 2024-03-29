import { getHeroById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe1 = getHeroById(2);

//     resolve(heroe1);
//     // reject("No se pudo encontrar el héroe");
//   }, 2000);
// });

// promesa
//   .then((heroe) => console.log("Heroe", heroe))
//   .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe1 = getHeroById(id);

      if (heroe1) {
        resolve(heroe1);
      } else {
        reject("No se pudo encontrar el héroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(4).then(console.log).catch(console.warn);
//   .catch((err) => console.warn(err));
