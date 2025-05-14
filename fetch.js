/* 🧩 ¿Qué es fetch?
  fetch() es una función que usamos para hacer peticiones HTTP (como GET o POST) desde el navegador o Node.js.
  * ✋ A veces, las APIs exigen ciertos headers
  * Un header HTTP es un dato que se incluye en la petición para decirle al servidor cosas como:
  * Quién está haciendo la petición (User-Agent)
  * Qué tipo de datos acepta (Accept)
  * Si se necesita autorización (Authorization)
  * Tipo de contenido enviado (Content-Type) 

*/

// 🧪 Ejemplo básico sin headers

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// 🔐 Ejemplo con headers personalizados

// fetch(
//   "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60&lon=10",
//   {
//     method: "GET",
//     headers: {
//       "User-Agent": "miapp@correo.com", // importante
//       Accept: "application/json",
//     },
//   }
// )
//   .then((res) => res.json())
//   .then((data) => {
//     const primerDato = data.properties.timeseries[0];
//     const temperatura = primerDato.data.instant.details.air_temperature;
//     console.log("🌡️ Temperatura:", temperatura, "°C");
//   })
//   .catch((error) => console.error("❌ Error:", error));

fetch(
  "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60&lon=10",
  {
    method: "GET",
    headers: {
      "User-Agent": "miapp@correo.com", // requerido
      Accept: "application/json",
    },
  }
)
  .then((res) => res.json())
  .then((data) => {
    // Imprimir el primer objeto dentro de timeseries
    console.log(
      "Primer objeto de timeseries:",
      JSON.stringify(data.properties.timeseries[0], null, 2)
    );

    // Si quieres ver los primeros 5 objetos de timeseries
    // data.properties.timeseries.slice(0, 5).forEach((objeto, index) => {
    //   console.log(`Objeto ${index + 1}:`, objeto);
    // });
  })
  .catch((error) => console.error("❌ Error:", error));

// opciones de fetch()
const options = {
  method: "GET",
};

fetch("/robots.txt", options)
  .then((response) => response.text())
  .then((data) => {
    /** Procesar los datos **/
  });

/* 
parámetro opcional options de la petición HTTP
Campo	Descripción
method	Método HTTP de la petición. Por defecto, GET. Otras opciones: HEAD, POST, etc...
headers	Cabeceras HTTP. Por defecto, {}.
body	Cuerpo de la petición HTTP. Puede ser de varios tipos: String, FormData, Blob, etc...
credentials	Modo de credenciales. Por defecto, omit. Otras opciones: same-origin e include.

 */

// credentials
// header
// response
