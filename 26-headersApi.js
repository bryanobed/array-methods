/* 
Los headers son fundamentales cuando trabajas con APIs:
Autenticación (Authorization)
Especificar tipo de contenido (Content-Type)
Aceptar tipos de respuesta (Accept)
Enviar claves, tokens o control de CORS
*/

// const response = await fetch("https://api.example.com", {
//   method: "GET", // o "POST", "PUT", "DELETE", "etc".
//   headers: {
//     "Content-Type": "aplicacion/json",
//     "Authorization": "applicacion/json",
//     "Authorization": "Bearer TU_TOKEN_AQUI",
//   }
// })

/* 📌 Headers comunes y su función:
Encabezado	      Descripción
Content-Type	    Indica el tipo de datos que estás enviando. Por ejemplo: "application/json"
Accept	          Indica el tipo de datos que esperas recibir del servidor
Authorization	    Envío de token o credenciales. Por ejemplo: "Bearer abc123"
X-API-Key	        Algunas APIs usan una clave personalizada en vez de Authorization
Access-Control-*	Se usa más en el servidor para habilitar CORS
*/


// 📦 Estructura básica de fetch con headers
fetch(URL, {
  method: "GET | POST | PUT | DELETE",
  headers: {
    "Content-Type": "application/json",         // qué estás enviando
    "Accept": "application/json",               // qué esperas recibir
    "Authorization": "Bearer TU_TOKEN_AQUI",    // para autenticación
  },
  body: JSON.stringify((data)) //solo en POS/PUT
})

/* 
🧪 Headers comunes y para qué sirven
Header	                      Valor típico	          ¿Cuándo usarlo?
Content-Type	                application/json	      En POST/PUT: Cuando envías datos en formato JSON
Accept	                      application/json	      Cuando esperas recibir JSON (o XML, HTML, etc.)
Authorization	                Bearer <token>	        Cuando la API requiere token de acceso
X-API-Key	                    <clave>	                Algunas APIs piden esta cabecera personalizada
Cache-Control	                no-cache	              Para evitar respuestas en caché
Access-Control-Allow-Origin	* o tu dominio	          Solo en respuestas del servidor (CORS)
*/


// Métodos HTTP y cómo se relacionan con los headers
/* 
| Método | ¿Envío datos? | ¿Uso `Content-Type`? | ¿Uso `body`? |
| ------ | ------------- | -------------------- | ------------ |
| GET    | ❌ No          | Opcional            | ❌ No         |
| POST   | ✅ Sí          | ✅ Sí               | ✅ Sí         |
| PUT    | ✅ Sí          | ✅ Sí               | ✅ Sí         |
| DELETE | A veces       | Opcional              | Opcional     |

*/

// 📋Ejemplo completo (POST con headers y datos)
// async function enviarDatos() {
//   const URL = "https://api.example.com";
//   const data = { 
//     username: "Bryan", age: 24 
//   };

//   const response = await fetch(URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": "Bearer TU_TOKEN_AQUI",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(data)
//   })

//   const result = await response.json();
//   console.log(result);
// }

// 🧱 Errores comunes con headers
/* 
| Error común                     | Causa                                                                | Solución                                      |
| ------------------------------- | -------------------------------------------------------------------- | --------------------------------------------- |
| `401 Unauthorized`              | Token inválido o falta `Authorization`                               | Revisa el token o agrégalo                    |
| `415 Unsupported Media Type`    | No pusiste `Content-Type` o es incorrecto                            | Usa `"application/json"` si envías JSON       |
| `CORS error`                    | La API no permite tu origen                                          | El servidor debe permitir tu dominio con CORS |
| `SyntaxError: Unexpected token` | Estás intentando hacer `.json()` sobre una respuesta vacía o no JSON | Verifica `response.ok` antes de leer el body  |
*/