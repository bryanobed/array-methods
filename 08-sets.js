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


// Convertir Set a Arrays
// const convertir = new Set([5, "A", [99, 10, 24]]);
// console.log(convertir);
// const conversion = Array.from(convertir); // [...convertir]
// console.log(conversion);

// Convertir a Arrays a Set
const array1 = [5, "A", [99, 10, 24]];
const convert = new Set(array1);
console.log(convert);
