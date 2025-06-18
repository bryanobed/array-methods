// no son más que un tipo de funciones que se pasan por parámetro a otras funciones.
// const letters = ["a", "b", "c", "d", "e"];
// function action(element, index) {
//   console.log(`Posicion ${index} tiene el valor ${element}`);
// }
// letters.forEach(action);
// letters.forEach((element, index) => {
//   console.log(`Posicion ${index} tiene el valor ${element}`);
// })

// sincronía con callback
// const task1 = () => console.log("Tarea 1 completada");
// const task2 = () => console.log("Tarea 2 completada");
// const task3 = () => console.log("Tarea 3 completada");
// task1();
// task2();
// task3();

// asincronía con callback
// const task1 = () => setTimeout(() => console.log("Tarea 1 completada"), 3000);
// const task2 = () => setTimeout(() => console.log("Tarea 2 completada"), 2000);
// const task3 = () => setTimeout(() => console.log("Tarea 3 completada"), 5000);
// task1();
// task2();
// task3();

// Ahora vamos a controlar las 3 tareas.
const task1 = (callback) => {
  console.log("Iniciando tarea 1...");
  setTimeout(() => {
    callback();
  }, 3000);
}

const task2 = (callback) => {
  console.log("Iniciando tarea 2...");
  setTimeout(() => {
    callback();
  }, 2000);
}

const task3 = (callback) => {
  console.log("Iniciando tarea 3...");
  setTimeout(() => {
    callback();
  }, 5000);
}

task1(() => {
  console.log("Tarea 1 completada");
  task2(() => {
    console.log("Tarea 2 completada");
    tarea3(() => {
      console.log("Tarea 3 completada");
    })
  })
})

// --> Desventajas: Callback Hell. La forma triangular que produce es conocida como Callback Hell o Pyramid of Doom, debido a su forma, resultando un código muy poco elegante que se puede complicar demasiado de cara a la legibilidad.

// Ejemplo mio de callback
const doTasks = (callback) => {
  const number = 1 + Math.floor(Math.random() * 6);
  callback(number);
}

doTasks((number) => {
  if(number === 6){
    console.log(`✅ Promesa cumplida: ${number}`);
  } else {
    console.log(`❌ Promesa rechazada: ${number}`);
  }
})