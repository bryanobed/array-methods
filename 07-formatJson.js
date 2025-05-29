// Convertir JSON a objeto JSON.parse():
// los json no soporta funciones

// const json = `{
//   "name": "Manz",
//   "life": 99
// }`;
// const user = JSON.parse(json);
// console.log(user); // { name: 'Manz', life: 99 }
// console.log(user.name);
// console.log(user.life);

// // Convertir objeto a JSON.parse():
// // los obj si soporta funciones
// const user2 = {
//   name: "Manz",
//   life: 99,
//   talk: function () {
//     return "Hola!";
//   },
// };
// JSON.stringify(user2);
// console.log(user2); // '{"name":"Manz","life":99}'

// // Se puede pasar un segundo parámetro al método .stringify() que será un aaray
// const user100 = {
//   name: "Manz",
//   life: 99,
//   power: 10,
// };
// JSON.stringify(user100, ["life"]); // '{"life":99}'
// JSON.stringify(user100, ["name", "power"]); // '{"name":"Manz","power":10}'
// JSON.stringify(user100, []); // '{}'
// JSON.stringify(user100, null); // '{"name":"Manz","life":99,"power":10}'

//  JSON.stringify(obj)	Convierte un objeto  obj a su representación JSON y la devuelve.
//  JSON.stringify(obj, props)	Idem al anterior, pero filtra y mantiene solo las propiedades del  props.
//  JSON.stringify(obj, props, spaces)	Idem al anterior, pero indenta el JSON a  spaces espacios.

// /* Por último, también podemos añadir un tercer parámetro en el método .stringify() que indicará el número de espacios que quieres usar al crear el string del JSON resultante.
//  */
// const user200 = {
//   name: "Manz",
//   life: 99,
// };

// JSON.stringify(user200, null, 2);
// // {
// //   "name": "Manz",
// //   "life": 99
// // }

// JSON.stringify(user200, null, 4);
// // {
// //     "name": "Manz",
// //     "life": 99
// // }

// JSON.stringify(user200, ["name"], 1);
// // {
// //  "name": "Manz"
// // }

// // Desestructuración de objetos. Spread y rest
// const user300 = {
//   name300: "Manz",
//   role300: "streamer",
//   life300: 99,
// };
// // const { name300, role300, life300} = user300;
// // imprimir uno por uno
// console.log({ name300, role300 });
// console.log({ life300 });
// // imprimir todo
// console.log({ ...user300 });
// // renombrar propiedades si lo deseamos
// const { name300, role300: role400, life300 } = user300;
// console.log({ name300, role400, life300 });
// // valor por defecto propiedades
// const { name, role = "normal user", life = 100 } = user;

// // recrear nuevos objetos apartir de otros, añadiendo nuevas props o sobreescribiendo antiguas props
// const user50 = {
//   name: "Manz",
//   role: "streamer",
//   life: 99,
// };
// const fullUser = {
//   ...user50,
//   power: 25, //añade nueva props power
//   life: 50, //sobreescribe life con valor 50
// };

// // ahora con datos no primitivos array, funciones, etc
// const user51 = {
//   name: "Manz",
//   role: "streamer",
//   life: 99,
//   features: ["learn", "code", "paint"],
// };
// // los tipos de datos complejos no son copias, si no referencias
// // en este caso crea una ref en el array de features
// const fullUser10 = {
//   ...user51,
//   power: 25,
//   life: 50,
// };
// console.log(user51.features); // ["learn", "code", "paint"]
// console.log(fullUser10.features); // ["learn", "code", "paint"]

// fullUser.features[0] = "program";
// console.log(fullUser10.features); // ["program", "code", "paint"]
// console.log(user51.features); // ["program", "code", "paint"]

// // para no afectar directamente le objeto de uno con otro
// const user20 = {
//   name: "Manz",
//   role: "streamer",
//   life: 99,
//   features: ["learn", "code", "paint"],
// };

// // ...structuredClone(objeto) devuelve un nuevo objeto, y no la referencia.
// const fullUser20 = {
//   ...structuredClone(user),
//   power: 25,
//   life: 50,
// };
// console.log(user20.features); // ["learn", "code", "paint"]
// console.log(fullUser20.features); // ["learn", "code", "paint"]

// fullUser20.features[0] = "program";

// console.log(fullUser20.features); // ["program", "code", "paint"]
// console.log(user20.features); // ["learn", "code", "paint"]

// ejemplo 2 substraer complejos
// const user30 = {
//   name: "Bryan",
//   age: "24",
//   role: "streamer",
//   attibutes: {
//     height: "1.80",
//     favColor: "blue",
//     hairColor: "brown",
//   },
// };
// // Extraemos propiedad attributes (objeto con 3 propiedades)
// const { attibutes} = user30;
// console.log(attibutes);
// // Extraemos propiedad height (number)
// const { attibutes: {height} } = user30;
// console.log(height);
// // Extraemos propiedad height (number) y la cambiamos por nombre size
// const { attibutes: {height: size} } = user30;
// console.log(size);

// Desestructuración (rest)
// const user = {
//   name: "Manz",
//   role: "streamer",
//   life: 99
// }
// const { name, ...rest } = user;
// la propiedad name la desestructuramos como variable y en el caso de rest la desestructuramos como un objeto que contiene las propiedades role y life.
// console.log(name); // "Manz"
// console.log(rest); // { role: "Admin", life: 99 }

// Parámetros desestructurados
// const user = {
//   name: "Manz",
//   role: "streamer",
//   life: 99,
// };

// function show({ name, role, life }) {
//   const stars = "⭐".repeat(life / 20);
//   return `Nombre: ${name} (${role}) ${stars}`;
// }

// show(user); // "Nombre: Manz (streamer) ⭐⭐⭐⭐"

// Clonar objetos o elementos
// 🥂 Copia por valor (Duplica el contenido)
// 🔮 Copia por referencia (Hace referencia a dónde está el contenido)

// Copia por valor se reliza con tipo de datos number, string, boolean, es decir, con datos primitivos y no comlejos

// Copia por referencia se reliza con tipo de datos más complejos array, object, etc
//  Clonación superficial (Shallow clone): Se llama así cuando realizamos una clonación de una estructura de datos y sólo se copia su primer nivel, mientras que segundo y niveles más profundos, se crean referencias.

// 🧨 Clonación profunda (Deep clone): Se llama así cuando realizamos una clonación de una estructura de datos a todos sus niveles.

// Observa esta estructura de datos:
const data = {
  name: "ManzDev", // Se clona en superficial y en profundidad
  tired: false, // Se clona en superficial y en profundidad
  likes: ["css", "javascript", "html", "vue"], // Sólo en profundidad
  numbers: [4, 8, 15, 16, 23, 42], // Sólo en profundidad
};
// Si realizamos una clonación superficial, solo clonaríamos los tipos de datos básicos (los dos primeros). Los dos últimos, al ser estructuras complejas en sí mismas, no se realizaría una clonación, sino que sería una referencia al elemento original, modificando ambos si alteramos uno de sus elementos, como vimos anteriormente.

// Si realizamos una clonación profunda, no tendríamos este problema, se clonarían todos los elementos, independientemente del nivel de profundidad.

/* 
Como conclusión:

Usa ... (spread) o Object.assign() si trabajas con datos primitivos y un sólo nivel de profundidad.
Usa JSON.parse() y JSON.stringify() en el mismo caso. Útil si necesitas navegadores muy antiguos.
Usa structuredClone() si quieres un clonado moderno, que soporte diferentes niveles de profundidad.
Usa cloneDeep() de Lodash si requieres clonado de funciones y no te supone un coste incluir dependencias externas.
*/

/* 
Tipo de dato	...spread / Object.assign()	JSON.parse()	_.cloneDeep()	structuredClone()
Tipos básicos (primitivos)
✅ Sí	✅ Sí	✅ Sí	✅ Sí
✅ Sí	✅ Sí	✅ Sí	✅ Sí
✅ Sí	✅ Sí	✅ Sí	✅ Sí
undefined	✅ Sí	⚠️ null	✅ Sí	✅ Sí
null	✅ Sí	✅ Sí	✅ Sí	✅ Sí
Tipos complejos (no primitivos)
❌ No, referencia	✅ Sí	✅ Sí	✅ Sí
❌ No, referencia	✅ Sí	✅ Sí	✅ Sí
❌ No, referencia	⚠️ string	✅ Sí	✅ Sí
❌ No, referencia	❌ Devuelve TypeError	✅ Sí	✅ Sí
❌ No, referencia	⚠️ {} vacío	✅ Sí	✅ Sí
 / 	❌ No, referencia	⚠️ {} vacío	✅ Sí	✅ Sí
❌ No, referencia	✅ Sí	✅ Sí	❌ Devuelve DOMException
 / 	❌ No, referencia	⚠️ null	✅ Sí	❌ Devuelve DOMException
Elemento del DOM	❌ No, referencia	⚠️ {} vacío	❌ No, referencia	❌ Devuelve DOMException */
