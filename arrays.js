// push() agrega al final
// const arrPush = [1, 2, 3, 4, 5, 6];
// arrPush.push(7,8,9,10);
// console.log(arrPush);
// const arrPushString = ["Martha", "Fernando", "Sabina", "Ariadna"];
// arrPushString.push("Bryan");
// console.log(arrPushString);
// console.log(arrPushString.length);

// pop() elimina al final
// const arrPop = [10, 12, 14];
// const eliminado = arrPop.pop();
// console.log(eliminado);
// console.log(arrPop);
// const arrPopString = ["Martha", "Fernando", "Sabina", "Ariadna"];
// const eliminado = arrPopString.pop();
// console.log(eliminado);
// console.log(arrPopString);

// unshift() agrega al inicio
// const arrUnshift = [10, 12, 14];
// arrUnshift.unshift(20, 22, 24);
// console.log(arrUnshift);
// const arrUnshiftString = ["Martha", "Fernando", "Sabina", "Ariadna"];
// arrUnshiftString.unshift("Bryan");
// console.log(arrUnshiftString);

// shift() elimina al inicio
// const arrShift = [10, 12, 14];
// arrShift.shift();
// console.log(arrShift);
// const arrShiftString = ["Martha", "Fernando", "Sabina", "Ariadna"];
// const eliminado = arrShiftString.shift();
// console.log("->", eliminado);
// console.log(arrShiftString);

// .splice(index, count, item, item..) uso para eliminar, reemplazar o insertar
// const arrSplice = ["pera", "manzana", "banana"];
// const quitados = arrSplice.splice(1,2);
// console.log("Quitados", quitados); // [ 'manzana', 'banana' ]
// console.log("Original",arrSplice); //  ['pera' ]
// const sinEliminar = ["name1", "name2", "name3"];
// const eliminados = sinEliminar.splice(1, 0, "name4", "name5");
// console.log("Eliminados", eliminados); // []
// console.log("Original", sinEliminar); // [ 'name1', 'name4', 'name5', 'name2', 'name3' ]

// .slice(inicio, fin) copia una parte del array sin modificar el original
// const arrslice = ["pera", "manzana", "banana"];
// const copia = arrslice.slice(0, 2);
// console.log("Original", arrslice); // ['pera', 'manzana', 'banana']
// console.log("Copia:", copia); // ['pera', 'manzana']

// Copiar desde un índice hasta el final
// const arrSlice2 = ["pera", "manzana", "banana", "naranja", "limon", "kiwi", "melon"];
// const copia2 = arrSlice2.slice(2);
// console.log("Original", arrSlice2);
// console.log("Copia:", copia2);

// Copiar todo el array
// const arrSlice3 = ["pera", "manzana", "banana", "naranja"];
// const copia3 = arrSlice3.slice();
// console.log("Copia:", copia3);
// console.log("Original", arrSlice3);

// .sort() ordenar array string en orden alfabetico y numeros con funcion.
// Orden Ascendente
// const arrSort = [10, 60, 220, 50];
// arrSort.sort((a, b) => a - b);
// console.log(arrSort);

// Orden Descendente
// const arrSort2 = [10, 60, 220, 50];
// arrSort2.sort((a, b) => b - a);
// console.log(arrSort2);

// Ordenar objetos por una propiedad
// const users = [
//   { name: "Ana", edad: 30 },
//   { name: "Luis", edad: 20 },
//   { name: "Pedro", edad: 40 },
// ];
// users.sort((a, b) => a.edad - b.edad);
// console.log(users);

// const userString = [
//   { name: "Luis", edad: 20 },
//   { name: "Ana", edad: 30 },
//   { name: "Pedro", edad: 40 },
//   { name: "aaaaaa", edad: 40 },
// ];
// const userStringSort = userString.sort((a,b) => a.name.localeCompare(b.name));
// console.log(userStringSort);
// cadena1.localeCompare(cadena2, [locales], [opciones])
// 🔢 Valores que retorna:
// -1 → si cadena1 va antes que cadena2
// 0 → si son iguales
// 1 → si cadena1 va después que cadena2

// .reverse()	Invierte el orden de elos elementos del array
// const arrReverse = [20, 40, 60, 80, 100];
// arrReverse.reverse();
// console.log(arrReverse);

// .map(elemento, indice, arrayOriginal) crea nuevo array aplicando una funcion a cada elemento devuelve nuevo arr
// const numeros = [1, 2, 3, 4, 5];
// const alCuadrado = numeros.map((num) => num * num);
// console.log(alCuadrado);
// console.log(numeros);

// .filter(elemento, index, array) crea nuevo array solo con elementos que cumplan con una condicion
// const arrFilter = [1, 2, 3, 4, 5, 21, 34, 43, 2];
// const mayoresA3 = arrFilter.filter((num) => num > 3);
// console.log(mayoresA3);

// const users = [
//   { name: "Bryan", edad: 20 },
//   { name: "Fer", edad: 50 },
//   { name: "Sabi", edad: 60 },
// ];
// const mayoreA30 = users.filter((user) => user.edad > 30);
// console.log(mayoreA30);

// .find() – Devuelve el primer elemento/valor que cumpla una condición o si no cumple undefined.
// const arrFind = [1, 2, 3, 4, 5, 21, 34, 43, 2, 2];
// const isMayor3 = arrFind.find((num) => num > 3);
// console.log(isMayor3);

// const users = [
//   { name: "Bryan", edad: 20 },
//   { name: "Fer", edad: 50 },
//   { name: "Sabi", edad: 60 },
// ];
// const mayoreA30 = users.find((user) => user.edad > 30);
// console.log(mayoreA30); // { name: 'Fer', edad: 50 }

// .findIndex() - Devuelve el índice del primer elemento que cumpla una condición o  -1
// const fruits = [
//   { id: 1, name: "apple" },
//   { id: 2, name: "orange" },
//   { id: 3, name: "banana" },
// ];
// const indexFruitsMenos1 = fruits.findIndex((fruit) => fruit.name === 2); // -1
// console.log(indexFruitsMenos1);
// const indexFruitsIndex = fruits.findIndex((fruit) => fruit.id === 2); //
// console.log(indexFruitsIndex);

// .some() Verifica si al menos un elemento cumple la condición: true o false
//  Devuelve un booleano: true si encuentra al menos uno, false si ninguno
// const edades = [18, 21, 17, 30];
// const hayMenores = edades.some((edad) => edad < 18);
// console.log(hayMenores); // true

// .every() - Verificar si todos los elementos del array cumplen una condicion
// true → si todos los elementos cumplen la condición
// false → si al menos uno NO la cumple
// const edades = [18, 20, 22];
// const todosMayores = edades.every((edad) => edad >= 18);
// console.log(todosMayores); // true

// .includes() verifica si un array tiene un valor especifico (igual === estrictamente)
// true si lo encuentra o false si no
// const fruits = ["apple", "banana", "orange"];
// const isBanana = fruits.includes("banana");
// console.log(isBanana);

// .reduce(callback, valorInicial)
// 1️⃣ Primer argumento → una función de callback
// Esa función se ejecuta una vez por cada elemento del array. Recibe cuatro parámetros:
// (acc, item, índice, arrayOriginal) => { ... }
// Pero normalmente usamos solo los dos primeros:
// acc: el acumulador, donde se guarda el resultado parcial.
// valorActual: el valor actual del array que estamos procesando.

// 2️⃣ Segundo argumento → el valor inicial del acumulador
// Es obligatorio si el array está vacío o si quieres controlar el tipo de dato del resultado.

// const numeros = [1, 2, 3, 4, 5];
// const resultado = numeros.reduce((acc, item) => {
//   console.log("Acc:", acc, "|Actual:", item);
//   return acc + item;
// }, 0);

// const names = ["Bryan", "Fernando", "Sabina", "Ariadna"];
// const res = names.reduce((acc, item) => {
//   // return (acc += " " + item);
//   return(acc += " " + item);
// }, "Hola");
// console.log(res);

// const users = [
//   { name: "Bryan", edad: 20 },
//   { name: "Martha", edad: 49 },
//   { name: "Sabina", edad: 60 },
// ];

// const indexed = users.reduce(
//   (acc, item) => ({
//     ...acc,
//     [item.name]: item,
//   }),
//   {}
// );
// console.log(indexed["Bryan"]);
// console.log(indexed);

// const numeros = [1, [2, 3], [4, 5], 6, 7];
// const resul = numeros.reduce((acc, item) => acc.concat(item), []);
// console.log(resul); // [  1, 2, 3, 4,5, 6, 7]

// .flat([depth])  Aplana un array hasta una profundidad determinada.
// depth (opcional): cuántos niveles de anidación quieres aplanar (por defecto es 1).
// const arr = [1, 2, [3, 4, [5, 6]]];
// console.log(arr.flat()); // [1, 2, 3, 4, [5, 6]]  ← aplana solo 1 nivel
// console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6]    ← aplana hasta 2 niveles

// también limpia valores vacíos
// const arr = [1, , 2, [3, , 4]];
// console.log(arr.flat()); // [1, 2, 3, 4]

// .flatMap(elemento, indice, array) :
// 🔁 Aplica una función a cada elemento del array (como .map()).
// 📦 Luego aplana automáticamente el resultado en una sola dimensión (como .flat()).
// const arrFlatMap = [1, 2, 3];
// // return un array por cada elemento
// const frases = ["Hola mundo", "React es genial", "FlatMap mola"];
// const palabras = frases.flatMap((frase, index) => {
//   console.log(index);
//   return frase.split(" ");
// });
// console.log(palabras);

// const frases = ["Hola mundo", "Adiós mundo"];
// // Opción 1: map() + flat()
// const resultado1 = frases.map((frase) => frase.split(" "));
// console.log(resultado1);
// // → [["Hola", "mundo"], ["Adiós", "mundo"]] ← Resultado intermedio (array de arrays)
// const resultadoFinal1 = resultado1.flat();
// console.log(resultadoFinal1);
// // → ["Hola", "mundo", "Adiós", "mundo"]

// forEach() recorre un array y ejecuta una función por cada elemento. No devuelve nada, solo actúa.
// const arrForEach = [1, 2, 3];
// arrForEach.forEach((num) => console.log(num));

// .join() Une todos los elementos de un array en una sola cadena.
// Puedes elegir qué separador usar entre los elementos (por defecto es una coma ,).
// const arrJoinCosas = ["Mouse", "Teclado", "Monitor", "Mochila", "Audifonos"];
// console.log(arrJoinCosas.join());

// indexof() Devuelve el índice (posición) donde se encuentra por primera vez. Si no lo encuentra, devuelve -1.
// ⚠️ Solo devuelve la primera coincidencia
// const frutas = ['manzana', 'banana', 'kiwi', 'banana', 'pera'];
// console.log(frutas.indexOf('banana')); // 👉 1
// console.log(frutas.indexOf('pera'));   // 👉 -1 (no está)
// console.log(frutas.indexOf('pera', 2));   // 👉 indice donde empieza a contar en el segundo parámetro

// lastIndexOf() Devuelve el índice de la última vez que aparece un elemento. Si no lo encuentra, devuelve -1.
// ⚠️ Solo devuelve la última coincidencia
const letras = ["a", "b", "c", "a", "d", "a"];
// console.log(letras.indexOf('a'));      // 👉 0 (primera aparición con indexOf)
// console.log(letras.lastIndexOf('a'));  // 👉 5 (última aparición con lastIndexOf)

const palabras = ["hola", "mundo", "hola", "mundo"];
console.log(palabras.lastIndexOf("mundo"));


/* 
| Método             | ¿Muta el array? | Valor que retorna                | Descripción breve                                                                 |
|--------------------|-----------------|--------------------------------|----------------------------------------------------------------------------------|
| `push()`           | ✅ Sí           | Nueva longitud del array         | Agrega uno o más elementos al final.                                            |
| `pop()`            | ✅ Sí           | Elemento eliminado               | Elimina el último elemento.                                                     |
| `shift()`          | ✅ Sí           | Elemento eliminado               | Elimina el primer elemento.                                                     |
| `unshift()`        | ✅ Sí           | Nueva longitud del array         | Agrega uno o más elementos al principio.                                        |
| `splice()`         | ✅ Sí           | Array con elementos eliminados   | Cambia el contenido eliminando y/o agregando elementos.                         |
| `slice()`          | ❌ No           | Nuevo array                      | Devuelve una copia de una parte del array.                                      |
| `concat()`         | ❌ No           | Nuevo array                      | Une dos o más arrays.                                                           |
| `join()`           | ❌ No           | String                           | Une todos los elementos en una cadena.                                          |
| `includes()`       | ❌ No           | `true` o `false`                 | Verifica si un valor está presente.                                             |
| `indexOf()`        | ❌ No           | Índice o `-1`                    | Primer índice de un valor, o `-1` si no se encuentra.                           |
| `lastIndexOf()`    | ❌ No           | Índice o `-1`                    | Último índice de un valor, o `-1` si no se encuentra.                           |
| `reverse()`        | ✅ Sí           | El mismo array                   | Invierte el orden de los elementos.                                             |
| `sort()`           | ✅ Sí           | El mismo array                   | Ordena los elementos (por defecto, alfabéticamente).                            |
| `toSorted()`       | ❌ No           | Nuevo array                      | Ordena como `sort()` pero sin modificar el original.                            |
| `toReversed()`     | ❌ No           | Nuevo array                      | Invierte como `reverse()` pero sin modificar el original.                       |
| `toSpliced()`      | ❌ No           | Nuevo array                      | Versión inmutable de `splice()`.                                                |
| `with()`           | ❌ No           | Nuevo array                      | Devuelve copia con un valor reemplazado en un índice.                           |
| `map()`            | ❌ No           | Nuevo array                      | Crea un nuevo array aplicando una función a cada elemento.                      |
| `forEach()`        | ❌ No           | `undefined`                     | Ejecuta una función por cada elemento (no devuelve nada).                       |
| `filter()`         | ❌ No           | Nuevo array                      | Crea un nuevo array con los elementos que cumplan una condición.                |
| `find()`           | ❌ No           | Primer elemento o `undefined`    | Devuelve el primer elemento que cumple la condición.                            |
| `findIndex()`      | ❌ No           | Índice o `-1`                    | Índice del primer elemento que cumple la condición.                             |
| `findLast()`       | ❌ No           | Último elemento o `undefined`    | Devuelve el último elemento que cumple la condición.                            |
| `findLastIndex()`  | ❌ No           | Índice o `-1`                    | Índice del último elemento que cumple la condición.                             |
| `some()`           | ❌ No           | `true` o `false`                 | Al menos un elemento cumple la condición.                                       |
| `every()`          | ❌ No           | `true` o `false`                 | Todos los elementos cumplen la condición.                                       |
| `reduce()`         | ❌ No           | Valor acumulado                  | Reduce el array a un solo valor (izquierda a derecha).                          |
| `reduceRight()`    | ❌ No           | Valor acumulado                  | Reduce el array a un solo valor (derecha a izquierda).                          |
| `at()`             | ❌ No           | Elemento o `undefined`           | Devuelve el elemento en el índice (permite negativos).                          |
| `fill()`           | ✅ Sí           | El mismo array                   | Rellena elementos con un valor específico.                                      |
| `copyWithin()`     | ✅ Sí           | El mismo array                   | Copia una parte del array dentro del mismo.                                     |
| `from()`           | ❌ No           | Nuevo array                      | Crea un array desde un iterable.                                                |
| `of()`             | ❌ No           | Nuevo array                      | Crea un array con los argumentos dados.                                         |
| `isArray()`        | ❌ No           | `true` o `false`                 | Verifica si el valor es un array.                                               |
| `entries()`        | ❌ No           | Iterador `[índice, valor]`       | Iterador de pares índice-valor.                                                 |
| `keys()`           | ❌ No           | Iterador de claves               | Iterador con los índices del array.                                             |
| `values()`         | ❌ No           | Iterador de valores              | Iterador con los valores del array.                                             |
| `toString()`       | ❌ No           | String                           | Convierte el array a texto (separado por comas).                                |
| `toLocaleString()` | ❌ No           | String                           | Convierte el array a texto usando configuración regional.                       |
| `valueOf()`        | ❌ No           | El mismo array                   | Devuelve el valor primitivo del array (es el mismo array).                      |
*/