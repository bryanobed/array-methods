// Propiedades de un objeto
// podemos acceder a sus propiedades de dos formas diferentes: a través de la notación con puntos o a través de la notación con corchetes.
// Notación con puntos (preferida)
// console.log(player.name); // Muestra "Manz"
// console.log(player.life); // Muestra 99

// // Notación con corchetes
// console.log(player["name"]); // Muestra "Manz"
// console.log(player["life"]); // Muestra 99

// Añadir propiedades
// FORMA 1: A través de notación con puntos
// const player = {};
// player.name = "Manz";
// player.life = 99;
// player.power = 10;

// // FORMA 2: A través de notación con corchetes
// const player = {};
// player["name"] = "Manz";
// player["life"] = 99;
// player["power"] = 10;
// console.log(player);

// Métodos de un objeto El método .toString()
// const number = 42.5;
// number.toString(); // Devuelve "42.5" (Método de variables de tipo Object)
// number.toLocaleString(); // Devuelve "42,5" (Método de variables de tipo Object)
// number.toFixed(3); // Devuelve "42.500" (Método de variables de tipo Number)
// Creando nuestro toString
const player = {
  name: "Manz",       // Nombre del jugador
  life: 4,            // Cantidad de vida actual
  totalLife: 6,       // Máximo de vida posible
  toString: function() {
    return `${this.name} (${this.life}/${this.totalLife})`;
  }
};
console.log("Mi jugador es " + player);       // "Mi jugador es Manz (4/6)"
