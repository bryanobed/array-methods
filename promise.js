// Promise.all() Espera a que todas las promesas se resuelvan correctamente. Si una sola falla, todo el conjunto falla.

// Promise.allSettled() Espera a que todas las promesas terminen, sin importar si fallan o se resuelven. Devuelve un array con el estado y valor o razón:

// Promise.any() La primera que finalice de forma correcta(resolve). Si una finaliza mal, espera a la siguiente. Si fallan todas lanza error.

// Promise.race() Responde con la primera promesa que termine, sin importar si se resuelve o falla.



// 🟦 1. Promise.all() → Todas deben resolverse bien
const api1 = () => Promise.resolve("✅ Usuario cargado");
const api2 = () => Promise.resolve("✅ Posts cargados");
Promise.all([api1(), api2()])
  .then((resultados) => console.log(resultados))
  .catch((error) => console.error("❌ Falló una promesa"));
// ["✅ Usuario cargado", "✅ Posts cargados"]


// 🟨 2. Promise.allSettled() → Todas, sin importar si fallan
const buena = () => Promise.resolve("👍 Funciona");
const mala = () => Promise.reject("💥 Error en API");

Promise.allSettled([buena(), mala()]).then((resultados) =>
  console.log(resultados)
);
/* 
[
  { status: 'fulfilled', value: '👍 Funciona' },
  { status: 'rejected', reason: '💥 Error en API' }
]
*/

// 🟥 3. Promise.race() → Primera en finalizar (bien o mal)
const lenta = () => new Promise(r => setTimeout(() => r("🐢 Lenta"), 3000));
const rapida = () => new Promise(r => setTimeout(() => r("⚡ Rápida"), 1000));

Promise.race([lenta(), rapida()])
  .then(resultado => console.log(resultado)); // 👉 ⚡ Rápida

// 🟩 4. Promise.any() → Primera que se resuelva bien
const falla1 = () => Promise.reject("❌ No disponible");
const ok = () => Promise.resolve("✅ Esta funcionó");
const falla2 = () => Promise.reject("❌ También falló");

Promise.any([falla1(), ok(), falla2()])
  .then(resultado => console.log(resultado)) // 👉 ✅ Esta funcionó
  .catch(err => console.error("😵‍💫 Todas fallaron"));



// Entendiendo con ejemplo real
