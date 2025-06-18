// ¿Qué es un Set? // Un Set es una colección de elementos unicos. no se pueden repetir.
/* 
Propiedad o Método	    Descripción
NUMBER.size	Propiedad que devuelve el número de elementos que tiene el conjunto.
SET.add(element)	Añade un elemento al conjunto (si no está repetido) y devuelve el set. Muta
BOOLEAN.has(element)	Comprueba si element ya existe en el conjunto. Devuelve si existe.
BOOLEAN.delete(element)	Elimina el element del conjunto. Devuelve si lo eliminó correctamente.
.clear()	Vacía el conjunto completo.
*/

// const set1 = new Set(); // Set({})               (Conjunto vacío)
// const set2 = new Set([5, 6, 7, 8, 9]); // Set({5, 6, 7, 8, 9})  (Conjunto con 5 elementos)
// const set3 = new Set([5, 5, 7, 8, 9]); // Set({5, 7, 8, 9})     (Conjunto con 4 elementos)
// console.log(set1.constructor.name); // "Set"

// add: añadir elementos
// has: comprobar si un elemento existe
// delete: eliminar un elemento
// clear: vaciar el conjunto
// const unicos = new Set();
// unicos.add(2);
// unicos.add(4);
// unicos.add(6);

// unicos.has(2); // true
// unicos.has(3); // false

// unicos.delete(2)
// console.log(unicos);

// --> Convertir Set a Arrays
// const convertir = new Set([5, "A", [99, 10, 24]]);
// console.log("SET ORIGINIAL: ", convertir); // Set(3) { 5, 'A', [ 99, 10, 24 ] }
// const conversion = Array.from(convertir); // Lo mismo con -> [...convertir]
// console.log("SET CONVERTIDO EN ARRAY",conversion); // [ 5, 'A', [ 99, 10, 24 ] ]

// Convertir a Arrays a Set
// const array1 = [5, "A", [99, 10, 24]];
// console.log(array1); // [ 5, 'A', [ 99, 10, 24 ] ]
// const convert = new Set(array1);
// console.log(convert); // Set(3) { 5, 'A', [ 99, 10, 24 ] }

// 👉 ¿Qué son los WeakSet? - A grandes rasgos, los WeakSet son otro tipo de estructura de conjuntos, muy similar a Set (también impide introducir elementos duplicados), sin embargo, tiene algunos matices y diferencias. Veamos esas diferencias.
// 👉 Los WeakSet no permiten insertar datos primitivos

// 👉 Diferencias con los Set - Los Set son una estructura de datos poco restrictiva, ya que puedes insertar cualquier tipo de elemento. Los WeakSet no permiten insertar datos primitivos:
// // *** Set
// const set = new Set([1, "A", true]);                 // OK
// const set2 = new Set([{ name: "Manz" }, [2, 30]]);    // OK

// // *** WeakSet
// // const set3 = new WeakSet([1, "A", true]); // ERROR: Uncaught TypeError: Invalid value used in weak set
// const set4 = new WeakSet([{ name: "Manz" }, [2, 30]]); // OK
// console.log(set4);

// Por otro lado, los WeakSet utilizan referencias débiles a un objeto, es decir, si ese objeto no se utiliza (no está referenciado) en ninguna otra parte del código, se eliminará del WeakSet en cuanto el Garbage Collector (Recolector de basura) lo decida para liberar memoria:
// let element = { name: "Manz" };

// const set = new WeakSet([element]); // WeakSet({ { name: "Manz" } })
// element = null; // WeakSet({})

// Tabla de resumen de diferencias
// A continuación, una tabla resumen de las diferencias entre Set y WeakSet:

// Característica	Set	WeakSet
// Se pueden insertar elementos repetidos	❌	❌
// Se pueden insertar elementos primitivos	✅	❌
// Si no se usa el elemento, se elimina del set	❌	✅
// Se puede convertir a array (es iterable)	✅	❌
// Propiedad .size	✅	❌
// Método .add()	✅	✅
// Método .has()	✅	✅
// Método .delete()	✅	✅
// Método .clear()	✅	❌

// 👉 Operaciones de conjuntos -> Union - Intersección - Diferencia - Exclusión
// Unión: Es la suma de todos los elementos del conjunto A y el conjunto B.
// Intersección: Es la parte común de los elementos del conjunto A y el conjunto B.
// Diferencia: Son los elementos del conjunto A quitándole los comunes del conjunto B.
// Exclusión: Son los elementos del conjunto A y el conjunto B que no están en ambos.

// Con datos primitivos
// Unión de conjuntos
// const conjuntoA = new Set([1, 2, 3]);
// const conjuntoB = new Set([3, 4, 5]);
// const setFull = conjuntoA.union(conjuntoB);
// console.log(setFull); // Set(4) { 1, 2, 3, 4, 5 }

// Intersección de conjuntos
// const firstSet = new Set([1, 2, 3, 4]);
// const secondSet = new Set([3, 4, 5]);
// const intersection = firstSet.intersection(secondSet);
// console.log(intersection); // Set(2) { 3, 4 }

// Diferencia de conjuntos
// const firstSet = new Set([1, 2, 3, 4]);
// const secondSet = new Set([3, 4, 5]);
// const difference = firstSet.difference(secondSet);
// console.log(difference); // { 1, 2 }

// Exclusión de conjuntos
// const firstSet = new Set([1, 2, 3, 4, 5]);
// const secondSet = new Set([3, 4, 5, 6]);
// const exclusion = firstSet.symmetricDifference(secondSet);
// console.log(exclusion); // { 1, 2, 6 }


// Con datos complejos
const firstSet = new Set([
  { name: "Javascript" },
  { name: "CSS" },
  { name: "HTML" },
  { name: "SVG" },
  { name: "JSON" }
]);

const secondSet = new Set([
  { name: "Javascript", type: "Node" },
  { name: "PHP" },
  { name: "Go" },
  { name: "Javascript", type: "Deno" },
  { name: "JSON" }
]);
// Posibles soluciones