// --> con Await
// const task1 = fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58");
// const task2 = fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58");
// const task3 = fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58");
// const tasks = [task1, task2, task3];
// const responses = await Promise.all(tasks);
// const codes = responses.map(response => response.status); // [200, 200, 200]
// console.log(codes);

// --> con .then()
// const task1 = fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58");
// const task2 = fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58");
// const task3 = fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58");
// const tasks = [task1, task2, task3];
// Promise.all(tasks)
//   .then(responses => {
//     const codes = responses.map(response => response.status); // [200, 200, 200]
//     console.log(codes);
//   })

// 1. API pública de clima (Met.no)
function fetchWeatherData() {
  return fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58",{
      headers: {
        "User-Agent": "test@example.com",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      const summary =
        data.properties.timeseries[0].data.next_12_hours.summary.symbol_code;
        console.log("Clima (código):", summary);
      return data;
    })
    .catch((error) => {
      console.error("Error obteniendo clima:", error);
    });
}
// fetchWeatherData();

// 2. API pública de tipo de cambio (Frankfurter)
function fetchCurrencyData() {
  return fetch("https://api.frankfurter.app/latest?from=USD&to=EUR")
    .then((res) => res.json())
    .then((data) => {
      console.log("Tipo de cambio (USD a EUR):", data.rates.EUR);
      return data;
    })
    .catch((error) => {
      console.error("Error obteniendo tipo de cambio:", error);
    });
}
// fetchCurrencyData();

// 3. API pública de usuarios falsos
function fetchUserData() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.json())
    .then((data) => {
      console.log("Datos del usuario:", data.name, "Email del usuario:",data.email);
      return data;
    })
    .catch((error) => {
      console.error("Error obteniendo datos del usuario:", error);
    });
}
// fetchUserData();

// Ejecutar las tres peticiones en paralelo
Promise.all([fetchWeatherData(), fetchCurrencyData(), fetchUserData()])
  .then((results) => {
    console.log("\nTodos los resultados:", results);
  })
  .catch((error) => {
    console.error("Error en alguna de las peticiones:", error);
  });
