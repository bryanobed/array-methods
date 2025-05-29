// Ordenación de un array
/* 
Método	Descripción
ARRAY.reverse() ⚠️	Invierte el orden de elementos del array.
ARRAY.toReversed() ✅	Devuelve una copia del array, con el orden de los elementos invertido.
ARRAY.sort() ⚠️	Ordena los elementos del array bajo un criterio de ordenación alfabética.
ARRAY.sort(criterio) ⚠️	Idem, pero bajo un criterio de ordenación indicado por  criterio.
ARRAY.toSorted() ✅	Devuelve una copia del array, con los elementos ordenados.
ARRAY.toSorted(criterio) ✅	Idem, pero ordenado por el criterio establecido por parámetro.

✅ El array original está seguro (no muta).
⚠️ El array original cambia (muta).
*/

// El método .toReversed() no muta el original y .reverse() si muta
// const array = [1, 2, 3, 4, 5];
// const toReversed = array.toReversed();
// console.log(toReversed);
// console.log(array);

// El método toSorted() no muta el original y .sort() si muta
// const names = ["Alberto", "Zoe", "Ana", "Mauricio", "Bernardo"];
// const sortedNames = names.toSorted();
// console.log(sortedNames);
// console.log(names);
// console.log(sortedNames === names);

const elements = [8, 4];
const alphaOrder = (a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}
const sortedElements = elements.toSorted(alphaOrder);
