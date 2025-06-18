// Promise.allSettled() Espera a que todas las promesas terminen, sin importar si fallan o se resuelven. Devuelve un array con el status y value o razón:

// Esta operación nos devuelve un  de objetos (uno por cada promesa) donde cada objeto tiene dos propiedades:
// La propiedad status y value, donde nos indica si cada promesa individual ha sido cumplida o rechazada
// La propiedad status y  reason, con la razón del rechazo de la promesa si no se cumple.

const p1 = fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) => data.results[0]);

const p2 = fetch("https://rickandmortyapi.com/api/character---")
  .then((res) => res.json())
  .then((data) => {
    throw new Error("Error");
  });

const p3 = fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) => data.results[0]);

Promise.allSettled([p1, p2, p3]).then((allData) => console.log(allData))