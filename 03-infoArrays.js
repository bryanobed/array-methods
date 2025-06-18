// Convertir a array
/* 
Array.from(obj) 	Intenta convertir el obj en un array.
Array.from(obj, fmap) 	Identico de arriba, pero ejecuta la función fmap por cada elemento. Equivalente a .map()
Array.from({ length:size})	Crea un array a partir de un  de tamaño size, relleno de 
Array.concat(e1, e2, e3...)	Devuelve los elementos pasados por parámetro concatenados al final del array.
Sring.join(sep)	Une los elementos del array mediante separadores sep en un .
*/

// const text = "12345";
// const array = Array.from(text);
// console.log(array);

// const text2 = "12345";
// const loMismo1 = Array.from(text2, (number) => Number(number));
// const loMismo2 = Array.from(text2, Number);
// const loMismo3 = [...text2].map(Number);
// console.log(loMismo1); // [ 1, 2, 3, 4, 5 ]
// console.log(loMismo2); // [ 1, 2, 3, 4, 5 ]
// console.log(loMismo3); // [ 1, 2, 3, 4, 5 ]

// Desestructuración de arrays -> spread y rest
// spread operator
// const debug = (param) => console.log(...param);
// const arr = [1, 2, 3];
// debug(arr);

// rest
// const debug = (...param) => console.log(param);
// debug(1, 2, 3, 4, 5);// [1, 2, 3, 4, 5]

// const elements = [1, 2, 3];
// const [first, ...rest] = elements;
// console.log(first); // 1
// console.log(rest); // [2, 3]

// Reestructuración de arrays
// const par = [3,4];
// const complete = [1,2, ...par, 4] // [1, 2, 3, 4, 4]
// console.log(complete);

// search elements in an arrays
/* 
Método	Descripción
BOOLEAN.includes(element) 	Comprueba si element está incluido en el array.
BOOLEAN.includes(element, from) 	Idem anterior, pero partiendo desde la posición from del array.
NUMBER.indexOf(element)	Devuelve la posición de la primera aparición de element o -1 si no existe.
NUMBER.indexOf(element, from)	Idem, pero partiendo desde la posición from del array.
NUMBER.lastIndexOf(element)	Devuelve la posición de la última aparición de element. Devuelve -1 si no existe.
NUMBER.lastIndexOf(element, from)	Idem, pero partiendo desde la posición from del array.
 */
// const arr = ["Helllo", "World", "Hi", "Thanks"];
// arr.includes("World"); // true
// arr.includes("jaja"); // false

// const names = [
//   { name: "María", age: 20 },
//   { name: "Bernardo", age: 28 },
//   { name: "Pancracio", age: 22 },
//   { name: "Andrea", age: 19 },
//   { name: "Sara", age: 29 },
//   { name: "Jorge", age: 32 },
//   { name: "Yurena", age: 38 },
//   { name: "Ayoze", age: 18 },
// ];

// const findElement = (array, searchedAge) => {
//   return array.find((element) => element.age === searchedAge) ?? -1;
// };

// console.log(findElement(names, 19)); // { name: "Andrea", age: 19 }
// console.log(findElement(names, 32)); // { name: "Jorge", age: 32 }
// console.log(findElement(names, 33)); // -1

// Modificar o crear subarrays
/* 
Método	Descripción
ARRAY.slice(start, end) ✅	Devuelve los elementos desde la posición start hasta end (excluído).
ARRAY.splice(start, size) ⚠️	Devuelve los size siguientes elementos desde la posición start.
ARRAY.splice(start, size, e1, e2...) ⚠️	Idem. Además, luego inserta e1, e2... en la posición start.
ARRAY.toSpliced(start, size)  ✅	Idem a splice(start, size), pero sin mutar el array original.
ARRAY.toSpliced(st, sz, e1, e2...)  ✅	Idem a splice(st, sz, e1, e2..), pero sin mutar el array original.
ARRAY.copyWithin(pos, start, end)  ⚠️	Muta el array, cambiando en pos y copiando desde start a end.
ARRAY.fill(element, start, end)  ⚠️	Cambia los elementos del  por element desde start hasta end (último excluido).
ARRAY.with(index, item)  ✅	Devuelve una copia del original, con el elemento index modificado.

✅ El array original está seguro (no muta).
⚠️ El array original cambia (muta).
*/

// toSpliced(start, deleteCount)
// const letters = ["a", "b", "c", "d", "e"];
// // El array original no cambia
// console.log(letters.toSpliced(0, 2)); // ['c', 'd', 'e']
// // El array original no cambia
// console.log(letters.toSpliced(2, 1)); // [ 'a', 'b', 'd', 'e' ]
// console.log(letters);

// 🔹 with(index, value) – 🧱 devuelve un nuevo array con un valor reemplazado
// const arr = ["a", "b", "c", "d"];
// const newArr = arr.with(1, "x");
// console.log(arr); // [ 'a', 'b', 'c', 'd' ]
// console.log(newArr); // [ 'a', 'x', 'c', 'd' ]

// 🔹 copyWithin(pos, start, end) – 🔁 sobrescribe elementos desde una copia interna
// const arr = ["a", "b", "c", "d"];
// arr.copyWithin(1, 0, 2);
// console.log(arr); // ['a', 'a', 'b', 'd']

// 🔹array.fill(value, start, end) – 🔄 Rellena un array con un valor
/* 
value: El valor con el que se quiere rellenar el array.
start (opcional): El índice en el que comenzar a rellenar (por defecto es 0).
end (opcional): El índice en el que dejar de rellenar (no incluye el índice final, por defecto es el tamaño del array).
*/
// todos son reemplazados
// const arr = [1, 2, 3, 4, 5];
// arr.fill(0);
// console.log(arr); // [0, 0, 0, 0, 0]

// con start y end
const arr = [1, 2, 3, 4, 5];
arr.fill(0, 1, 4); // Rellena de 1 a 3 (último exluido)
console.log(arr); // [1, 0, 0, 0, 5]
