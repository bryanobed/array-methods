// 👉push() agrega al final
// const arrPush = [1, 2, 3, 4, 5, 6];
// arrPush.push(7,8,9,10);
// console.log(arrPush);
// const arrPushString = ["Martha", "Fernando", "Sabina", "Ariadna"];
// arrPushString.push("Bryan");
// console.log(arrPushString);
// console.log(arrPushString.length);

// 👉pop() elimina al final
// const arrPop = [10, 12, 14];
// const eliminado = arrPop.pop();
// console.log(eliminado);
// console.log(arrPop);
// const arrPopString = ["Martha", "Fernando", "Sabina", "Ariadna"];
// const eliminado = arrPopString.pop();
// console.log(eliminado);
// console.log(arrPopString);

// 👉unshift() agrega al inicio
// const arrUnshift = [10, 12, 14];
// arrUnshift.unshift(20, 22, 24);
// console.log(arrUnshift);
// const arrUnshiftString = ["Martha", "Fernando", "Sabina", "Ariadna"];
// arrUnshiftString.unshift("Bryan");
// console.log(arrUnshiftString);

// 👉shift() elimina al inicio
// const arrShift = [10, 12, 14];
// arrShift.shift();
// console.log(arrShift);
// const arrShiftString = ["Martha", "Fernando", "Sabina", "Ariadna"];
// const eliminado = arrShiftString.shift();
// console.log("->", eliminado);
// console.log(arrShiftString);

// 👉.splice(index, count, item, item..) uso para eliminar, reemplazar o insertar
// const arrSplice = ["pera", "manzana", "banana"];
// const quitados = arrSplice.splice(1,2);
// console.log("Quitados", quitados); // [ 'manzana', 'banana' ]
// console.log("Original",arrSplice); //  ['pera' ]
// const sinEliminar = ["name1", "name2", "name3"];
// const eliminados = sinEliminar.splice(1, 0, "name4", "name5");
// console.log("Eliminados", eliminados); // []
// console.log("Original", sinEliminar); // [ 'name1', 'name4', 'name5', 'name2', 'name3' ]

// 👉.slice(inicio, fin) copia una parte del array sin modificar el original
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

// 👉.sort() ordenar array string en orden alfabetico y numeros con funcion.
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

// 👉.reverse()	Invierte el orden de elos elementos del array
// const arrReverse = [20, 40, 60, 80, 100];
// arrReverse.reverse();
// console.log(arrReverse);

// 👉.map(elemento, indice, arrayOriginal) crea nuevo array aplicando una funcion a cada elemento devuelve nuevo arr
// const numeros = [1, 2, 3, 4, 5];
// const alCuadrado = numeros.map((num) => num * num);
// console.log(alCuadrado);
// console.log(numeros);

// 👉.filter(elemento, index, array) crea nuevo array solo con elementos que cumplan con una condicion
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

// 👉.find() – Devuelve el primer elemento/valor que cumpla una condición o si no cumple undefined.
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

// 👉.findIndex() - Devuelve el índice del primer elemento que cumpla una condición o  -1
// const fruits = [
//   { id: 1, name: "apple" },
//   { id: 2, name: "orange" },
//   { id: 3, name: "banana" },
// ];
// const indexFruitsMenos1 = fruits.findIndex((fruit) => fruit.name === 2); // -1
// console.log(indexFruitsMenos1);
// const indexFruitsIndex = fruits.findIndex((fruit) => fruit.id === 2); //
// console.log(indexFruitsIndex);

// 👉.some() Verifica si al menos un elemento cumple la condición: true o false
//  Devuelve un booleano: true si encuentra al menos uno, false si ninguno
// const edades = [18, 21, 17, 30];
// const hayMenores = edades.some((edad) => edad < 18);
// console.log(hayMenores); // true

// 👉.every() - Verificar si todos los elementos del array cumplen una condicion
// true → si todos los elementos cumplen la condición
// false → si al menos uno NO la cumple
// const edades = [18, 20, 22];
// const todosMayores = edades.every((edad) => edad >= 18);
// console.log(todosMayores); // true

// 👉.includes() verifica si un array tiene un valor especifico (igual === estrictamente)
// true si lo encuentra o false si no
// const fruits = ["apple", "banana", "orange"];
// const isBanana = fruits.includes("banana");
// console.log(isBanana); //true

// 👉.reduce(callback, valorInicial)
// 1️⃣ Primer argumento → una función de callback
// Esa función se ejecuta una vez por cada elemento del array. Recibe cuatro parámetros:
// (acc, item, índice, arrayOriginal) => { ... }
// Pero normalmente usamos solo los dos primeros:
// acc: el acumulador, donde se guarda el resultado parcial.
// item/valorActual: el valor actual del array que estamos procesando.

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

// 👉.flat([depth])  Aplana un array hasta una profundidad determinada.
// depth (opcional): cuántos niveles de anidación quieres aplanar (por defecto es 1).
// const arr = [1, 2, [3, 4, [5, 6]]];
// console.log(arr.flat()); // [1, 2, 3, 4, [5, 6]]  ← aplana solo 1 nivel
// console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6]    ← aplana hasta 2 niveles

// también limpia valores vacíos
// const arr = [1, , 2, [3, , 4]];
// console.log(arr.flat()); // [1, 2, 3, 4]

// 👉.flatMap(elemento, indice, array) :
// 🔁 Aplica una función a cada elemento del array (como .map()).
// 📦 Luego aplana automáticamente el resultado en una sola dimensión (como .flat()).
// const arrFlatMap = [1, 2, 3];
// // return un array por cada elemento
// const frases = ["Hola mundo", "React es genial", "FlatMap mola"];
// const palabras = frases.flatMap((frase, index) => {
//   console.log(index); 
//   return frase.split(" "); // → [["Hola", "mundo"], ["React", "es", "genial"], ["FlatMap", "mola"]] ← Resultado intermedio (array de arrays)
// });
// console.log(palabras); 

// const frases = ["Hola mundo", "Adiós mundo"];
// // Opción 1: map() + flat()
// const resultado1 = frases.map((frase) => frase.split(" "));
// console.log(resultado1); // → [["Hola", "mundo"], ["Adiós", "mundo"]] ← Resultado intermedio (array de arrays)
// const resultadoFinal1 = resultado1.flat();
// console.log(resultadoFinal1); // → ["Hola", "mundo", "Adiós", "mundo"]

// 👉forEach() recorre un array y ejecuta una función por cada elemento. No devuelve nada, solo actúa.
// const arrForEach = [1, 2, 3];
// arrForEach.forEach((num) => console.log(num));

// 👉.join() Une todos los elementos de un array en una sola cadena.
// Puedes elegir qué separador usar entre los elementos (por defecto es una coma ,).
// const arrJoinCosas = ["Mouse", "Teclado", "Monitor", "Mochila", "Audifonos"];
// console.log(arrJoinCosas.join());

// 👉indexof() Devuelve el índice (posición) donde se encuentra por primera vez. Si no lo encuentra, devuelve -1.
// ⚠️ Solo devuelve la primera coincidencia
// const frutas = ['manzana', 'banana', 'kiwi', 'banana', 'pera'];
// console.log(frutas.indexOf('banana')); // 👉 1
// console.log(frutas.indexOf('pera'));   // 👉 -1 (no está)
// console.log(frutas.indexOf('pera', 2));   // 👉 indice donde empieza a contar en el segundo parámetro

// 👉lastIndexOf() Devuelve el índice de la última vez que aparece un elemento. Si no lo encuentra, devuelve -1.
// ⚠️ Solo devuelve la última coincidencia
// const letras = ["a", "b", "c", "a", "d", "a"];
// console.log(letras.indexOf('a'));      // 👉 0 (primera aparición con indexOf)
// console.log(letras.lastIndexOf('a'));  // 👉 5 (última aparición con lastIndexOf)

// const palabras = ["hola", "mundo", "hola", "mundo"];
// console.log(palabras.lastIndexOf("mundo"));



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
| `findLast()`       | ❌ No           | Último elemento o `undefined`    | Devuelve el último elemento que cumple la condición.                            |
| `findIndex()`      | ❌ No           | Índice o `-1`                    | Índice del primer elemento que cumple la condición.                             |
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


// 👉toSorted() - Crea una copia del array, ordenada (como sort()), pero sin mutar el array original.
// const arrToSorted = [8,2,5,0,1,4];
// console.log(arrToSorted); // [ 8, 2, 5, 0, 1, 4 ]
// const ordenado = arrToSorted.toSorted();
// console.log(ordenado); // [ 0, 1, 2, 4, 5, 8 ]


// 👉toReversed() - Devuelve una copia del array invertida (no modifica el original).
// const arrToReversed = [3,1,0,5];
// console.log(arrToReversed);
// const ordenado2 = arrToReversed.toReversed();
// console.log(ordenado2); // [ 5, 0, 1, 3 ]
// -----Ejemplo 2-----
// const comentarios = [
//   { usuario: 'Juan', texto: 'Muy bueno.' },
//   { usuario: 'María', texto: 'Me encantó.' },
//   { usuario: 'Carlos', texto: 'Excelente.' }
// ];
// const comentariosReverso = comentarios.toReversed();
// console.log(comentariosReverso);
/*
[
  { usuario: 'Carlos', texto: 'Excelente.' },
  { usuario: 'María', texto: 'Me encantó.' },
  { usuario: 'Juan', texto: 'Muy bueno.' }
]
*/

// 👉 toSpliced() - Devuelve una copia del arr con cambios, como splice(), sin modificar el original. Permite eliminar, reemplazar o insertar elementos.
// const nuevoArray = toSpliced(inicio, cantidadEliminar, ...elementosAInsertar);
// const productos = [
//   { id: 1, nombre: 'Mouse' },
//   { id: 2, nombre: 'Teclado' },
//   { id: 3, nombre: 'Monitor' }
// ];
// console.log(productos); // Original intacto
// // Reemplazamos el segundo elemento por uno nuevo
// const actualizados = productos.toSpliced(1, 1, { id: 4, nombre: 'Laptop' });
// console.log(actualizados);
/*
[
  { id: 1, nombre: 'Mouse' },
  { id: 4, nombre: 'Laptop' },
  { id: 3, nombre: 'Monitor' }
]
*/
// -----Ejemplo 2-----
// const tareas = ['Comer', 'Dormir'];
// const nuevasTareas = tareas.toSpliced(1, 0, 'Estudiar');
// console.log(nuevasTareas); // ['Comer', 'Estudiar', 'Dormir']


// 👉 with() - Devuelve una copia del array con un elemento reemplazado en un índice dado, sin modificar el original.
// const nuevoArray = array.with(indice, nuevoValor);
// const arrWith = [10,20,30,40];
// console.log(arrWith); //arreglo original intacto
// const nuevoArrWith = arrWith.with(2,100);
// console.log(nuevoArrWith);
// -----Ejemplo 2----
// const empleados = [
//   { id: 1, nombre: 'Juan' },
//   { id: 2, nombre: 'Maria' },
//   { id: 3, nombre: 'Carlos' }
// ];
// const empleadosWith = empleados.with(1, { id: 4, nombre: 'Pedro' });
// console.log(empleadosWith);
// [
//   { id: 1, nombre: 'Juan' },
//   { id: 4, nombre: 'Pedro' },
//   { id: 3, nombre: 'Carlos' }
// ]

// 👉 copyWithin() - Copia una parte del array dentro del mismo array, sin cambiar su tamaño. Sí, muta/modifica el array original.
// array.copyWithin(indice, inicio, fin);
// indice: dónde pegar (destino donde comienza a sobrescribir).
// inicio: desde dónde copiar (incluido).
// fin: hasta dónde copiar (último excluido). Si no lo pones, copia hasta el final.
// // ----Ejemplo 1-----
// let frutas = ['manzana', 'banana', 'kiwi', 'uva'];
// frutas.copyWithin(1, 2); // Copia desde índice 2 en adelante ('kiwi', 'uva') y lo pone desde el índice 1
// console.log(frutas); // ['manzana', 'kiwi', 'uva', 'uva']
// // ----Ejemplo 2-----
// let numeros = [10, 20, 30, 40, 50];
// numeros.copyWithin(3, 0, 2); // Copia del índice 0 al 2 (10, 20) y lo pone desde el índice 3
// console.log(numeros); // [10, 20, 30, 10, 20]


// 👉 findLast() - lo mismo que find pero el último elemento/valor si no undifined
// const colores = [
//   { id: 1, nombre: 'Rojo' },
//   { id: 2, nombre: 'Azul' },
//   { id: 3, nombre: 'Verde' }
// ];
// const coloresFinLast = colores.findLast((color) => color.nombre === "Verde");
// console.log(coloresFinLast); // { id: 3, nombre: 'Verde' }


// 👉 findIndex() - Devuelve el índice del primer elemento que cumple con una condición. Si no encuentra ninguno, devuelve -1.
// const usuarios = [
//   { nombre: 'Ana', activo: true },
//   { nombre: 'Luis', activo: false },
//   { nombre: 'Carlos', activo: false }
// ];
// // Buscar el último usuario inactivo
// const ultInactivo = usuarios.findIndex(usuario => usuario.activo === false);
// console.log(ultInactivo); // 1


// 👉 findLastIndex() - Devuelve el índice del último elemento que cumple con una condición. Si no encuentra ninguno, devuelve -1.
// const indice = array.findLastIndex((elemento, índice, array) => condición);
// const usuarios = [
//   { nombre: 'Ana', activo: true },
//   { nombre: 'Luis', activo: false },
//   { nombre: 'Carlos', activo: false }
// ];

// // Buscar el último usuario inactivo
// const ultInactivo = usuarios.findLastIndex(usuario => usuario.activo === false);
// console.log(ultInactivo); // 2


// 👉 reduceRight() - Recorre el array de derecha a izquierda (fin → inicio). No muta
// array.reduceRight((acumulador, valorActual, índice, array) => {
//   // lógica para combinar valores
// }, valorInicial);
// acumulador: valor que se va acumulando.
// valorActual/item: el elemento actual del array.
// valorInicial: valor con el que empieza la acumulación (opcional, pero recomendado).
// ----Ejemplo 1-----
// const compras = [
//   { producto: "Manzana", cantidad: 2, precio: 3 },
//   { producto: "Banana", cantidad: 5, precio: 1 },
//   { producto: "Naranja", cantidad: 3, precio: 4 },
// ];
// const total = compras.reduceRight((acum, item, index) => {
//   const subtotal = item.cantidad * item.precio;
//   console.log(`Paso ${index} → ${item.producto}: ${item.cantidad} x ${item.precio} = ${subtotal}`);
//   console.log(`  Acumulador antes: ${acum}`);
//   const nuevoAcumulador = acum + subtotal;
//   console.log(`  Acumulador después: ${nuevoAcumulador}`);
//   console.log('-----------------');
//   return nuevoAcumulador;
// }, 0);
// console.log(total); // 23


// 👉 at() - Devuelve el valor en la posición indicada (permite usar índices negativos). NO muta el array original.
// const frutas = ["manzana", "banana", "naranja", "kiwi"];
// console.log(frutas.at(0));    // "manzana"
// console.log(frutas.at(2));    // "naranja"
// console.log(frutas.at(-1));   // "kiwi" (último elemento)
// console.log(frutas.at(-2));   // "naranja"
// console.log(frutas.at(-3));   // "banana"


// 👉 fill() - Rellena el array con un valor desde el índice inicio hasta antes de fin.
// fill(valor, inicio?, fin?) 
// fin lo excluye
// ----Ejemplo 1-----
// const nums = [1, 2, 3, 4, 5];
// nums.fill(10, 1, 4); // desde índice 1 hasta 3 (no incluye el 4)
// console.log(nums); // [ 1, 10, 10, 10, 5 ]
// ----Ejemplo 2-----
// const vacio = new Array(4).fill("🍎");
// console.log(vacio); // ["🍎", "🍎", "🍎", "🍎"]



// 👉 Array.from() - sirve para convertir casi cualquier cosa en un array.  No muta el original
// Array.from(iterable [, mapFn [, thisArg]])
// iterable: Lo que quieres convertir.
// mapFn (opcional): Función que se aplica a cada elemento (como map()).
// thisArg (opcional): Valor this dentro de la función.

// 👉 const letras = Array.from("hola");
// console.log(letras); // ["h", "o", "l", "a"]

// const numeros = new Set([1, 2, 2, 3]);
// const arrayNumeros = Array.from(numeros);
// console.log(arrayNumeros); // [1, 2, 3]

// const del1Al5 = Array.from({ length: 5 }, (_, i) => i + 1);
// console.log(del1Al5); // [1, 2, 3, 4, 5]


// 👉 Array.of() - Crea un nuevo array a partir de los argumentos que le pases, sin importar cuántos sean ni qué tipo tengan. No muta
// Con números:
// const nums = Array.of(10, 20, 30);
// console.log(nums); // [10, 20, 30]

// // Con strings:
// const frutas = Array.of("manzana", "banana", "pera");
// console.log(frutas); // ["manzana", "banana", "pera"]

// // Con objetos:
// const personas = Array.of(
//   { nombre: "Ana", edad: 25 },
//   { nombre: "Luis", edad: 30 }
// );
// console.log(personas);
// // [
// //   { nombre: "Ana", edad: 25 },
// //   { nombre: "Luis", edad: 30 }
// // ]

// // Un solo número (NO crea array vacío, crea array con ese número):
// const uno = Array.of(5);
// console.log(uno); // [5]

// // Comparación con Array():
// console.log(Array(5));       // [ <5 empty items> ] ← array vacío de 5 posiciones
// console.log(Array.of(5));    // [5] ← array con un valor 5



// 👉 isArray() - Verifica si un valor es un array. No modifica el valor original.
// console.log(Array.isArray([1, 2, 3]));        // true
// console.log(Array.isArray("hola"));           // false
// console.log(Array.isArray({ a: 1, b: 2 }));   // false
// console.log(Array.isArray([]));                // true
// console.log(Array.isArray(undefined));        // false
// console.log(Array.isArray(null));              // false


// 👉 entries() - Devuelve un iterador que permite recorrer el array con pares de [índice, valor]. No modifica el array original.
// const frutas = ['🍎', '🍌', '🍍'];
// const iterador = frutas.entries();
// console.log(iterador.next()); // { value: [0, '🍎'], done: false }
// console.log(iterador.next()); // { value: [1, '🍌'], done: false }
// console.log(iterador.next()); // { value: [2, '🍍'], done: false }
// console.log(iterador.next()); // { value: undefined, done: true }

// ejemplo de arriba más práctico, con for.(..of:
// for(const [i, value] of frutas.entries()) {
//   console.log(i, value);
// }


// const nombres = ["Ana", "Luis", "María"];

// for (const [i, nombre] of nombres.entries()) {
//   console.log(`Índice ${i}: ${nombre}`);
// }

// 👉 keys() - Devuelve un iterador que recorre los índices (o claves) del array. No da los valores, solo los índices numéricos.
// const arrKeys = [100,200,300];
// for (const key of arrKeys.keys()) {
//   console.log(`Índice: ${key}`);
// }

// console.log(newArrKeys.next()); // { value: 0, done: false }
// console.log(newArrKeys.next()); // { value: 1, done: false }
// console.log(newArrKeys.next()); // { value: 2, done: false }
// console.log(newArrKeys.next()); // { value: undefined, done: true }

// 👉 values() - Devuelve un iterador con los valores del array (uno por uno). NO muta
// const arrValues = ['🍎', '🍌', '🍍'];
// const arrValuesIterator = arrValues.values();
// console.log(arrValuesIterator.next()); // { value: '🍎', done: false }
// console.log(arrValuesIterator.next()); // { value: '🍌'', done: false }
// console.log(arrValuesIterator.next()); // { value: '🍍', done: false }
// console.log(arrValuesIterator.next()); // { value: 'undefined', done: true }

// for(const value of arrValuesIterator) {
//   console.log(value); // '🍎', '🍌', '🍍'
// }


// 👉 toString() - Convierte un array en un string plano con sus elementos separados por comas. No muta
// const frutas = ["manzana", "banana", "kiwi"];
// const texto = frutas.toString();
// console.log(texto);        // "manzana,banana,kiwi"
// console.log(frutas);       // ["manzana", "banana", "kiwi"] — No se modifica


// 👉 toLocaleString() - Convierte los elementos del array en texto, respetando la configuración regional (idioma, moneda, fecha, etc.). No muta
// const fecha = new Date(2025, 0, 15); // 15 de enero de 2025
// const textoFechas = fecha.toLocaleString("es-MX", { year: "numeric", month: "long", day: "numeric" });
// console.log(textoFechas); // 15 de enero de 2025

// "numeric" — muestra el mes como número (ej: 1, 2, 3)
// "2-digit" — muestra el mes con dos dígitos (ej: 01, 02, 03)
// "short" — muestra el mes abreviado (ej: Ene, Feb, Mar)
// "long" — muestra el mes completo (ej: Enero, Febrero, Marzo)


// 👉 valueOf() - Devuelve el valor primitivo de un objeto. En arrays, devuelve el mismo array (sin copia ni modificación).
// const arr = [1, 2, 3];
// const val = arr.valueOf();
// console.log(val);           // [1, 2, 3]
// console.log(val === arr);   // true (mismo array)

// Ejemplo con objeto Date
// const fecha = new Date(2025, 0, 15);
// const valFecha = fecha.valueOf();
// console.log(valFecha);  // 1736828400000 (milisegundos desde 1970)
// console.log(typeof valFecha); // 'number'




