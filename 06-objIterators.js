/* Iteradores de objetos
Convertir objetos a arrays
 */

// Iteradores de objetos
// existen unos métodos denominados Object.keys(), Object.values() y Object.entries()

/* 
Método	Descripción
Object.keys(obj) 	Itera el obj y devuelve sus claves (propiedades, índices, keys) del objeto.
Object.values(obj) 	Itera el obj y devuelve los valores de sus propiedades.
Object.entries(obj) 	Itera el obj y devuelve un array con los pares [key, valor].
Object.fromEntries(array) Construye un objeto con un array de pares [key, valor].
*/

// Convertir un objeto a array
// const user = {
//   name: "Manz",
//   life: 99,
//   power: 10,
//   talk: function () {
//     return "Hola!";
//   },
// };

// Object.keys(user); // ["name", "life", "power", "talk"]
// Object.values(user); // ["Manz", 99, 10, ƒ]
// Object.entries(user); // [["name", "Manz"], ["life", 99], ["power", 10], ["talk", ƒ]]
// console.log(Object.fromEntries(Object.entries(user)));

// un ARRAY también es un OBJECT
// const animals = ["dog", "cat", "mouse", "rat", "hamster", "snake"];
// console.log(Object.keys(animals));
// console.log(Object.values(animals));

// Convertir un array a objeto -> Object.fromEntries
// const keys = ["name", "life", "power", "talk"];
// const values = ["Manz", 99, 10, function() { return "Hola" }];
// const entries = [];
// for (let i of Object.keys(keys)) {
//   const key = keys[i];
//   const value = values[i];
//   entries.push([key, value]);
// }
// const user = Object.fromEntries(entries);
// console.log(object);

// Otra forma, más compacta, pero que quizás requiere más experiencia, sería la siguiente:
// const keys = ["name", "life", "power", "talk"];
// const values = ["Manz", 99, 10, function() { return "Hola" }];

// const entries = values.map((value, index) => [keys[index], value]);
// const user = Object.fromEntries(entries);

// Agrupar datos por criterio
// Método	                          Descripción
// Object.groupBy(datos, criterio)	Agrupa en un  los datos por el criterio indicado.
// Map.groupBy(datos, criterio)	Agrupa en un  los datos por el criterio indicado.
// Por parámetro, pasaremos la estructura de datos ARRAY y en el segundo parámetro es una FUNCTION que hará de callback para definir cuál es el criterio que vamos a escoger.

// El método Object.groupBy()
// const users = [
//   { name: "ManzDev", type: "streamer", color: "indigo" },
//   { name: "afor_digital", type: "streamer", color: "blue" },
//   { name: "BlurSoul_", type: "moderator", color: "indigo" },
//   { name: "felixicaza", type: "moderator", color: "blue" },
//   { name: "pheralb", type: "moderator", color: "green" },
//   { name: "omaaraguirre", type: "viewer", color: "orange" },
//   { name: "LuisLlamas_es", type: "viewer", color: "orange" },
//   { name: "ZeroBl", type: "viewer", color: "black" },
// ];
// const userByType = Object.groupBy(users, (user) => user.type);

// usersByType:
// {
//   streamer: [
//     { name: "ManzDev", type: "streamer", color: "indigo" },
//     { name: "afor_digital", type: "streamer", color: "blue" },
//   ];
//   moderator: [
//     { name: "BlurSoul_", type: "moderator", color: "indigo" },
//     { name: "felixicaza", type: "moderator", color: "blue" },
//     { name: "pheralb", type: "moderator", color: "green" },
//   ];
//   viewer: [
//     { name: "omaaraguirre", type: "viewer", color: "orange" },
//     { name: "LuisLlamas_es", type: "viewer", color: "orange" },
//     { name: "ZeroBl", type: "viewer", color: "black" },
//   ];
// }
// // imprimir todo
// // console.log(userByType);
// // console.log(userByType.streamer); // imprimir solo streamer
// // console.log(userByType.moderator); // imprimir solo moderator
// console.log(userByType.viewer); // imprimir solo viewer

// // usersByColor:
// {
//   black: [{ name: "ZeroBl", type: "viewer", color: "black" }];
//   blue: [
//     { name: "afor_digital", type: "streamer", color: "blue" },
//     { name: "felixicaza", type: "moderator", color: "blue" },
//   ];
//   green: [{ name: "pheralb", type: "moderator", color: "green" }];
//   indigo: [
//     { name: "ManzDev", type: "streamer", color: "indigo" },
//     { name: "BlurSoul_", type: "moderator", color: "indigo" },
//   ];
//   orange: [
//     { name: "omaaraguirre", type: "viewer", color: "orange" },
//     { name: "LuisLlamas_es", type: "viewer", color: "orange" },
//   ];
// }

// El método Map.groupBy()
const users = [
  { name: "ManzDev", type: "streamer", color: "indigo" },
  { name: "afor_digital", type: "streamer", color: "blue" },
  { name: "BlurSoul_", type: "moderator", color: "indigo" },
  { name: "felixicaza", type: "moderator", color: "blue" },
  { name: "pheralb", type: "moderator", color: "green" },
  { name: "omaaraguirre", type: "viewer", color: "orange" },
  { name: "LuisLlamas_es", type: "viewer", color: "orange" },
  { name: "ZeroBl", type: "viewer", color: "black" },
];
const userByTypeMap = Map.groupBy(users, (user) => user.type);

// Agrupar por criterio (legacy)
// En el caso de no poder utilizar estos nuevos métodos, o simplemente tener curiosidad como sería hacerlo sin ellos, puedes observar el siguiente ejemplo, donde agrupamos sin necesidad de los métodos .groupBy():
// const types = [...new Set(users.map((user) => user.type))]; // const types = ["streamer", "moderator", "viewer"];
// const userByType= {};
// types.forEach(type => (usersByType[type] = users.filter(user => user.type === type)))
/* 
1️⃣ Primero obtenemos los tipos de los usuarios en un Set para que no se repitan
2️⃣ Luego, desestructuramos para convertirlo en un OBJECT
3️⃣ Creamos un objeto vacío usersByType
4️⃣ Por cada uno de los tipos, filtramos los usuarios
5️⃣ Y los metemos en el objeto, indexado por dicho tipo
*/

// Resumen  🧩 Iteradores de objetos en JavaScript
// | Método                    | Qué hace                                                  |
// | ------------------------- | --------------------------------------------------------- |
// | `Object.keys(obj)`        | Devuelve un array con las **claves** del objeto           |
// | `Object.values(obj)`      | Devuelve un array con los **valores** del objeto          |
// | `Object.entries(obj)`     | Devuelve un array de pares `[clave, valor]`               |
// | `Object.fromEntries(arr)` | Convierte un array de pares `[clave, valor]` en un objeto |

const users333 = [
  { name: "ManzDev", type: "streamer", color: "indigo" },
  { name: "afor_digital", type: "streamer", color: "blue" },
  { name: "BlurSoul_", type: "moderator", color: "indigo" },
  { name: "felixicaza", type: "moderator", color: "blue" },
  { name: "pheralb", type: "moderator", color: "green" },
  { name: "omaaraguirre", type: "viewer", color: "orange" },
  { name: "LuisLlamas_es", type: "viewer", color: "orange" },
  { name: "ZeroBl", type: "viewer", color: "black" },
];
const userByTypes3423423 = Map.groupBy(users333, (user) => user.type);
console.log(userByTypes3423423);
console.log(Object.fromEntries(userByTypes3423423));
const objec = Object.groupBy(users333, (user) => user.color);
// console.log(Object.assign({}, objec));

/* 
🔸 Object.groupBy() → "Cuando quiero agrupar y exportar como JSON."
Devuelve un objeto {}.
Claves son strings.
Sirve para agrupar fácilmente y exportar como JSON.

🔸 Map.groupBy() → "Cuando necesito más poder y tipos de claves."
Devuelve un Map.
Claves pueden ser cualquier tipo (string, número, símbolo...).
Sirve para estructuras más complejas y flexibles.

*/
