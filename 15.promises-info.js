// ¿Qué son las promesas? es algo que en principio pensamos que se cumplirá en el futuro, pero a medida que pasa el tiempo pueden ocurrir varias cosas:
// La promesa se queda en un estado incierto indefinidamente (promesa pendiente)
// La promesa se cumple (promesa resuelta)
// La promesa no se cumple (promesa rechazada)

// --> Las promesas son una especie de condición que «se queda en espera» y se ejecutará en el futuro.
// primera_funcion_asincrona();
//   cuando_ocurra_la_condicion -> haz_esto();
// segunda_funcion_asincrona();
//   cuando_ocurra_la_condicion -> haz_esto();
// tercera_funcion_asincrona();
//   cuando_ocurra_la_condicion -> haz_esto();


// --> Consumir promesas
/* Métodos	Descripción	Más info
  .then(FUNCTION resolve)	Ejecuta la función cuando la promesa se cumple.	(Este artículo)
  .catch(FUNCTION reject)	Ejecuta la función cuando la promesa se rechaza.	(Este artículo)
  .then(FUNCTION resolve, FUNCTION reject)	Equivale a las 2 anteriores en el mismo .then().	Ver then() + catch()
  .finally(FUNCTION end)	Ejecuta la función cuando sale de pendiente.	Ver finally() 
*/

// .then(): cuando se cumple la promesa.
// .catch(): cuando se rechaza la promesa.
// .finally(): cuando la promesa se cumple o se rechace.

// --> Recordemos que las promesas estarán siempre en un estado de los siguientes:
// 1️⃣ pendiente (el estado inicial)
// 2️⃣ aceptada (se gestiona a través del .then())
// 2️⃣ rechazada (se gestiona a través del catch())
// fetch("/robots.txt")
//   .then(function() {
//     /* Código a realizar cuando se cumpla la promesa */
//   })
//   .catch(function() {
//     /* Código a realizar cuando se rechaza la promesa */
//   });

// --> Promesas encadenadas
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error.message))
//   .finally(() => console.log("Promesa finalizada"));



// --> Crear promesas
// necesitaremos hacer un new Promise(), que generará una promesa:
// const doTask = () => {
//   console.log("Mi función");
//   const promise = new Promise(() => {});
//   return promise;
// }
// doTask();


// resolve(): se ejecuta cuando la promesa se cumple.
// reject() : se ejecuta cuando la promesa se rechaza.

// --> Implementar la promesa
const doTask = () => {
  return new Promise((resolve, reject) => {

    // Obtenemos un número del 1 al 6
    const number = 1 + Math.floor(Math.random() * 6);

    // Si el número es 6, cumplimos la promesa
    if (number === 6) {
      resolve(number)
    }

    // Si no es 6, rechazamos la promesa
    reject(number);
  });
}

// --> Consumir la promesa creada
doTask()
  .then(number => console.log(`✅ Promesa cumplida: ${number}`))
  .catch(number => console.error(`❌ Promesa rechazada: ${number}`));

// funcion callback
const doaaTask = (callback) => {
  const number = 1 + Math.floor(Math.random() * 6);
  callback(number);
}

doaaTask((number) => {
  if (number === 6) {
    console.log(`✅ Promesa cumplida: ${number}`);
  } else {
    console.error(`❌ Promesa rechazada: ${number}`);
  }
});