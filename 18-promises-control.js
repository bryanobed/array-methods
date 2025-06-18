// Promesa de control:se encarga de controlar un grupo de promesas para coordinarlas. Imaginemos el siguiente supuesto: tenemos un grupo de tres tareas asíncronas y queremos realizar una tarea cuando las tres estén resueltas.

// 1️⃣ Guardar cada tarea asíncrona en una variable (cada una es una promesa)
// 2️⃣ Crear un array con cada una de esas tres promesas.
// 3️⃣ Recorrer el array de promesas con un .map() haciendo un await
// 2️⃣ El nuevo array tendría las promesas ya resueltas

// const task1 = fetch("/robots.txt");   // fetch devuelve una promise
// const task2 = fetch("/theme.css");    // fetch devuelve una promise
// const task3 = fetch("/index.js");     // fetch devuelve una promise

// const tasks = [task1, task2, task3];  // Array de promises

// // Recorrer el array de promesas para resolverlas con await
// // y obtener un array derivado (map) con los datos resueltos
// const responses = tasks.map(async (promise) => {
//   return await promise
// });
// El map() y async/await no son compatibles, el mao es síncrono y el async/await es asíncrono


// --> Alternativa 1: Usar un bucle for
// const task1 = fetch("api");
// const task2 = fetch("api");
// const task3 = fetch("api");

// const tasks = [task1, task2, task3];
// const responses = [];
// for (let i = 0; i < tasks.length; i++) {
//   const promise = tasks[i];
//   responses[i] = await promise;
// }
// console.log(responses);


// --> Alternativa 2: Usar un bucle for...of
// const task1 = fetch("api");
// const task2 = fetch("api");
// const task3 = fetch("api");

// const tasks = [task1, task2, task3];

// const responses = [];
// for (const promise of tasks) {
//   responses.push(await promise);
// }

// console.log(responses); // [Response, Response, Response]


// --> Alternative 3: Usar Promise.all()
// const task1 = fetch("api");
// const task2 = fetch("api");
// const task3 = fetch("api");

// const tasks = [task1, task2, task3];

// const responses = await Promise.all(tasks);

// console.log(responses);    // [Response, Response, Response]
