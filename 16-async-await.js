// ¿Qué es async/await? : no son más que una forma alternativa de gestionar las promesas en Javascript.
// function sincrona() { return 42; }
// async function asincrona() { return 42; }

// console.log(sincrona());   // 42
// console.log(asincrona());  // Promise <fulfilled>: 42

// const sincrona = () => 42;
// const asincrona = async () => 42;

// console.log(sincrona());   // 42
// console.log(asincrona());  // Promise <fulfilled>: 42


// --> Cómo usar async/await: await se coloca justo antes de una promesa para «esperar a que se resuelva».
// const response = await fetch("api/endpoint");
// const data = await response.json()
// console.log(data);

// console.log("Código síncrono.");

// Ejemplo 2 
// Con funciones tradicionales
// async function request() {
//   const response = await fetch("/data.json");
//   const data = await response.json();
//   return data;
// }

// await request();


// --> Promesas rechazadas con try/catch
const request = async () => {
  try{
    const response = await fetch("/data.json");
    const data = await response.json();
    return data;
  } catch(error) {
    console.log("Error papi", error);
  }
}


// --> Async/await + .then()
async function request() {
  return await fetch("api")
    .then(response => response.json());
}
await request();

function request() {
  return fetch("api")
    .then(async response => await response.json())
}
await request();
