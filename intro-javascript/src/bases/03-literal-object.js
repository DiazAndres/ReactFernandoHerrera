const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5556644,
        lat: 14.5365,
        lng: 34.5669,
    },
};

// console.table(persona)

// Clonar objeto con spread operator ...<object>
const persona2 = {...persona};
persona2.nombre = 'Peter';
console.log(persona)
console.log(persona2)



