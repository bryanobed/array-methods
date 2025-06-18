// ¿Qué es un Map?
// Mapa: Estructura de datos de pares clave-valor
// const map1 = new Map(); // Map({}) (Mapa vacío)
// const map2 = new Map([[1, "uno"]]); // Map({ 1=>"uno" })
// const map3 = new Map([[1, "uno"], [2, "dos"], [3, "tres"]]); // Map({ 1=>"uno", 2=>"dos", 3=>"tres" })
// console.log(map3);

// Métodos Map
// Propiedad o Método	Descripción
// NUMBER.size	Propiedad que devuelve el número de elementos que tiene el mapa.
// MAP.set(key, value)	Establece o modifica la clave key con el valor value. Muta
// BOOLEAN.has(key)	Comprueba si key ya existe en el mapa y devuelve si existe o no.
// OBJECT.get(key)	Obtiene el valor de la clave key del mapa.
// BOOLEAN.delete(key)	Elimina el elemento con la clave key del mapa. Devuelve si lo eliminó correctamente.
// .clear()	Vacía el mapa completamente.
// const map4 = new Map([[1, "uno"], [2, "dos"]]);
// // console.log(map4.size);    // 2

// const map5 = new Map([[1, "uno"], [2, "dos"], [1, "tres"]]);
// console.log(map5.size);    // 2 (El 1->"tres" sobreescribe al anterior)

// Recordar sus propiedad/métodos -> size, has(key), get(key), set(key,value), delete(key), clear()

// --> Convertir a Arrays
// const map6 = new Map([[1, "uno"], [2, "dos"], [3, "tres"]]);
// const array = [...structuredClone(map6)];
// const array2 = Array.from(map6);
// console.log(array);
// console.log(array2);

// WakeMap
// --> ¿Qué son los WeakMap? no permiten utilizar tipos primitivos (BOOLEAN, STRING, NUMBER)
// *** Map
// const map10 = new Map([[1, "uno"]]);                            // OK
// const key1 = { id: 1, type: "number" };
// const map11 = new Map([[key1, "uno"]]);      // OK
// console.log(map11.get(key1));

// // *** WeakMap
// const map12 = new WeakMap([[{id: 1}, "uno"]]);// ERROR: Uncaught TypeError: Invalid value used in weak map key
// // const map13 = new WeakMap([[{ id: 1, type: "number" }, "uno"]]); // OK

// Ejemplos
// const obj1 = {};
// const obj2 = {};
// const obj3 = {};
// const arrWeakMap = new WeakMap([
//   [obj1, "valor1"],
//   [obj2, "valor2"],
//   [obj3, "valor3"],
// ]);
