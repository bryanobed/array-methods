/* 
¿Qué es una RegExp?
Las expresiones regulares (a menudo llamadas RegExp o RegEx) son un sistema para buscar, capturar o reemplazar texto utilizando patrones. Estos patrones permiten realizar una búsqueda de texto de una forma relativamente sencilla y abstracta, de forma que abarca una gran cantidad de posibilidades que de otra forma sería imposible o muy extensa y compleja.

*/

// Ejemplo: Necesitamos detectar si un nombre empieza con las letras «p» o «s» y además termina con las letras «o» o «a». Es decir, necesitamos comprobar si se cumplen dos restricciones con dos posibilidades cada una.

// 🔴 Solución sin RegExp:
// const names = ["Pedro", "Sara", "Miriam", "Nestor", "Adrián", "Sandro"];

// names.forEach(function(name) {
//   const firstLetter = name.at(0).toLowerCase();
//   const lastLetter = name.at(-1).toLowerCase();

//   if ((firstLetter === "p" || firstLetter === "s") &&
//       (lastLetter === "o" || lastLetter === "a")) {
//     console.log(`El nombre ${name} cumple las restricciones.`);
//   }
// });

// 🔴 Solución con RegExp:
// const names = ["Pedro", "Sara", "Miriam", "Nestor", "Adrián", "Sandro"];

// names.forEach((name) => {
//   const regex = /^(p|s).+(o|a)$/i;

//   if (regex.test(name)) {
//     console.log(`El nombre ${name} cumple las restricciones.`);
//   }
// });

// 🔴 ¿Cómo crear una RegExp?
/* Constructor	Descripción
REGEXP new RegExp(regexp, flags)	Crea una nueva expresión regular a partir de regexp con los flags indicados.
REGEXP /regexp/flags	Simplemente, la expresión regular regexp entre barras /. Notación preferida. 
*/
// Notación literal (forma preferida)
// const regexp = /.a.o/i;
// Notación de objeto
// const regexp2 = new RegExp(".a.o", "i");
// const regexp3 = new RegExp(/.a.o/, "i");

// 🔴 Partes de una RegExp
// -> / Inicio de la expresión regular
// -> . Cualquier carácter
// -> a Una letra a
// -> . Cualquier carácter
// -> o Una letra o
// -> / Fin de la expresión regular

// 🔴 Flags
// -> i Ignora mayúsculas y minúsculas


// 🔴 Propiedades y flags
// 🔴 Propiedades de una RegExp
// const ej = /B...n/ig;
/* Propiedades	    Descripción
STRING.source	      Devuelve la expresión regular original definida (sin los flags).
STRING.flags	      Devuelve los flags activados en la expresión regular.
NUMBER.lastIndex	  Devuelve la posición donde detectó una ocurrencia en la última búsqueda. (Ver más adelante) */
// console.log(ej.source); // B...n
// console.log(ej.flags); // ig

// 🔴 Flags de una expresión regular: Los flags son uno o varios caracteres especiales que se escriben en un STRING tras la segunda barra / delimitadora de una expresión regular, o en el segundo parámetro del new RegExp():
// const regexp10 = /reg/;                     // No tiene ningún flag activado
// const regexp11 = /reg/i;                    // Tiene el flag "i" activado
// const regexp12 = new RegExp(/reg/, "g");   // Tiene el flag "g" activado
/* 
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
Propiedades	          Flag	Descripción
BOOLEAN.global	      g	    Búsqueda global. Permite seguir buscando coincidencias en lugar de pararse al encontrar una.
BOOLEAN.ignoreCase	  i	    Le da igual mayúsculas y minúsculas. Se suele denominar insensible a mayús/minús.
BOOLEAN.multiline	    m	    Multilínea. Permite a ^ y $ tratar los finales de línea \r o \n.
BOOLEAN.unicode	      u	    Unicode. Interpreta el patrón como un código de una secuencia Unicode.
BOOLEAN.sticky	      y	    Sticky. Busca sólo desde la posición indicada por lastIndex.
BOOLEAN.dotAll	      s	    Establece si \n, \r, separación de párrafo o separación de línea deberían considerarse en los .
BOOLEAN.hasIndices	  d	    Establece si al ejecutar un .exec() el resultado deberá tener propiedad .indices.
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴

*/

// const regexp = /manz/gi;
// regexp.global;                // true
// regexp.flags.includes("g");   // equivalente al anterior

// regexp.ignoreCase;            // true
// regexp.flags.includes("i");   // equivalente al anterior

// regexp.multiline;             // false
// regexp.flags.includes("m");   // equivalente al anterior

// regexp.sticky;                // false
// regexp.flags.includes("y");   // equivalente al anterior

// regexp.unicode;               // false
// regexp.flags.includes("u");   // equivalente al anterior

// regexp.dotAll;                // false
// regexp.flags.includes("s");   // equivalente al anterior

// regexp.hasIndices;            // false
// regexp.flags.includes("d");   // equivalente al anterior

// 🔴 Analizar cada uno de estos flags y a poner un ejemplo para comprenderlo mejor.
// Empecemos por la propiedad .global (flag g). Partamos del siguiente ejemplo, donde definimos una expresión regular sin el flag global. Observa que al ejecutar el método .test() para buscar coincidencias, encuentra la primera y no continua buscando. La propiedad .lastIndex siempre devuelve 0

// const text = `Hola Manz,
// Te escribo para contarte que Manz no me parece
// un nombre apropiado para una persona.

// Deberías ser un gato.

// Atentamente,
// Manz (el gato)`;

// const regexp20 = /M..z/;
// regexp20.lastIndex      // 0
// regexp20.test(text);    // true
// regexp20.lastIndex      // 0
// regexp20.test(text);    // true
// regexp20.lastIndex      // 0

// Lo mismo con el flag de la búsqueda global activado. Comprobarás que en este caso, el método .test() va buscando las coincidencias sucesivas y va devolviendo en .lastIndex la posición donde las ha encontrado:

// const text2 = `Hola Manz,
// Te escribo para contarte que Manz no me parece
// un nombre apropiado para una persona.

// Deberías ser un gato.

// Atentamente,
// Manz (el gato)`;

// const regexp30 = /M..z/g;

// regexp30.lastIndex      // 0
// regexp30.test(text);    // true
// regexp30.lastIndex      // 9 (primera línea)
// regexp30.test(text);    // true
// regexp30.lastIndex      // 45 (tercera línea)
// regexp30.test(text);    // true
// regexp30.lastIndex      // 138 (última línea)
// regexp30.test(text);    // false (no encuentra más, reinicia búsqueda)
// regexp30.lastIndex      // 0
// Una vez que .test() devuelve false, la búsqueda se reinicia y comenzarías a buscar desde el principio nuevamente.


// 🔴 Buscar y capturar textos
// -----> Métodos de un objeto RegExp
/* Método	              Descripción
Boolean test(text)	    Comprueba si la expresión regular «casa» con el texto text pasado por parámetro.
ARRAY exec(text)	      Ejecuta una búsqueda en el texto text. Devuelve ARRAY con capturas de lo que coincide. */

// test() - Busca una coincidencia y devuelve true o false
// exec() - Busca una coincidencia y devuelve un ARRAY con las capturas

// Método test() - Detectando coincidencias
// const regexp30 = /.a.o/i;
// regexp30.test("gato");   // true
// regexp30.test("perro");  // false
// regexp30.test("pato");    // true
// regexp30.test("perro");   // false
// regexp30.test("DATO");    // true   (el flag i ignora mayúsculas/minúsculas)
// El método .test() siempre te devolverá un BOOLEAN para indicar si la expresión regular ha encontrado un texto que encaja con el patrón definido.

// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
// Detalles sobre la parentización:
/* Formato	Descripción
(x)	        El patrón x incluído dentro de paréntesis se captura y se guarda.
(?:x)	      Si incluímos ?: al inicio del patrón en los paréntesis, no se captura ese patrón.
x(?=y)	    Busca sólo si x está seguido de y.
x(?!y)	    Busca sólo si x no está seguido de y. */
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴

// -----> algunos ejemplos para entenderlo bien
// const text30 = `Hola Manz,

// Soy el otro Manz (el gato) y necesito Whiskas.
// El pato del patio sigue haciendo ruido. Te lo digo como dato.

// Gracias.`;

// const regexp40 = /(.a.o)/g;
// regexp40.exec(text30);     // ["gato", "gato"]
// regexp40.exec(text30);     // ["pato ", "pato"]
// regexp40.exec(text30);     // ["dato.", "dato"]
// regexp40.exec(text30);     // null
// El primer elemento del array es la coincidencia con toda la expresión regular, mientras que el segundo elemento del array es la coincidencia con lo incluido en paréntesis.
// [ 🟥 "gato", 🟩 "gato" ]
// [ 🟥 "pato", 🟩 "pato" ]
// [ 🟥 "dato", 🟩 "dato" ]
//  null
// 🟥 es la coincidencia completa (lo que encontró en el texto)
// 🟩 es lo que estaba entre paréntesis (el grupo de captura)

// const regexp50 = /(..) (.a.o)/g;

// regexp50.exec(text30);     // ["el gato", "el", "gato"]
// regexp50.exec(text30);     // ["El pato", "El", "pato"]
// regexp50.exec(text30);     // ["mo dato", "mo", "dato"]
// regexp50.exec(text30);     // null


// 🔴 El array devuelto por .exec() - Ten en cuenta que el ARRAY devuelto por .exec() es un array especial que, a parte de funcionar como un array normal, tiene algunas propiedades extra que nos pueden ser de ayuda:

/* Propiedad	  Descripción
.length	        Como array, se puede consultar la longitud (coincidencia completa + capturas)
.groups	        Crea un objeto con los resultados de parentizaciones nombradas (ver más adelante)
.index	        Posición del STRING donde se encontró la ocurrencia.
.input	        Texto STRING original pasado por parámetro a .exec().
.indices	      Si se usa el flag d, se incluye un ARRAY con las posiciones inicial y final de las coincidencias del ARRAY. */

// Veamos el  resultante de la ejecución del método .exec() en esta ocasión:
// const text = "Hola Manz. El formato adecuado es 2022-08-15. Ignoraremos fechas en el formato 15-08-2022.";
// const regexp = /([0-9]{4})-([0-9]{2})-([0-9]{2})/gd;

// regexp.global;        // true (el flag global está activado)
// regexp.flags.includes("g"); // true igual que el anterior

// const result = regexp.exec(text);    // ["2022-08-15", "2022", "08", "15"]   index: 34
// regexp.exec(text);                   // null
// index 34 es la posición de encuentro de coincidencia contando espacios: 
// Hola Manz. El formato adecuado es 2022-08-15...
//                                  ^ posición 34

// LO DE ARRIBA PERO MÁS VISIBLE
// result                  // ["2022-08-15", "2022", "08", "15"]
// result.length           // 4
// result.index            // 34
// result.input === text   // true

// regexp.hasIndices       // true
// result.indices          // [[34, 44], [34, 38], [39, 41], [42, 44]]


// ------> Parentizaciones nombradas solo tenemos que añadir ?<nombre> al inicio de la parentización.
// const text = `Hola Manz. Son las 13:33:02, a las 18:45:00 te avisaré para decirle a afor que deje de usar Tailwind.`;
// const regexp = /(?<hours>[0-9]{2}):(?<mins>[0-9]{2}):(?<secs>[0-9]{2})/gd; 

// const result = regexp.exec(text);     // ["13:33:02", "13", "33", "02"]
// regexp.exec(text);     // ["18:45:00", "18", "45", "00"]
// regexp.exec(text);     // null

// ver que la propiedad .groups no es undefined, sino que tiene los textos de las parentizaciones capturadas:
// console.log("result.groups", result.groups);
// console.log("result.index",result.index);
// console.log("result.indices",result.indices);
// console.log("result.indices.groups",result.indices.groups);


// ------> Crear Expresiones Regulares
/* 
🔹 CARACTERES ESPECIALES (con \ para darles significado especial)
| Secuencia | Significado                                                | Ejemplo que coincide        |
| --------- | ---------------------------------------------------------- | --------------------------- |
| `\d`      | Un número del 0 al 9                                       | `"1"`, `"8"`                |
| `\D`      | Cualquier **carácter que NO sea un número**                | `"a"`, `"@"`                |
| `\w`      | Letra, número o guion bajo (A–Z, a–z, 0–9, `_`)            | `"a"`, `"Z"`, `"3"`, `"_"`  |
| `\W`      | Cualquier **carácter que NO sea** letra, número ni `_`     | `"%"`, `"@"`, `" "`         |
| `\s`      | Cualquier **espacio en blanco**: espacio, tab, nueva línea | `" "`, `"\t"`, `"\n"`       |
| `\S`      | Cualquier **carácter que NO sea espacio, tab o nueva línea | `"a"`, `"1"`                |
| `\b`      | Límite de palabra (inicio o fin de palabra)                | Coincide en `"\bcat"`       |
| `\B`      | NO límite de palabra                                       | Coincide dentro de palabras |
| `\t`      | Tabulación (tab)                                           | `"\t"`                      |
| `\n`      | Salto de línea (enter)                                     | `"\n"`                      |
| `\r`      | Retorno de carro (carriage return)                         | `"\r"`                      |

🔸 CARACTERES QUE SE ESCAPAN CON \ SI QUIERES USARLOS LITERALMENTE
| Carácter | Nombre          | Significado en regex                        | Escapado como   |      |
| -------- | --------------- | ------------------------------------------- | --------------- | ---- |
| `.`      | Punto           | Cualquier carácter (excepto salto de línea) | `\.`            |      |
| `*`      | Asterisco       | 0 o más repeticiones                        | `\*`            |      |
| `+`      | Más             | 1 o más repeticiones                        | `\+`            |      |
| `?`      | Interrogación   | Opcional (0 o 1 repeticiones)               | `\?`            |      |
| `^`      | Circunflejo     | Inicio de línea                             | `\^`            |      |
| `$`      | Símbolo peso    | Fin de línea                                | `\$`            |      |
| `()`     | Paréntesis      | Agrupación                                  | `\(` `\)`       |      |
| `[]`     | Corchetes       | Rango de caracteres                         | `\[`, `\]`      |      |
| `{}`     | Llaves          | Cuántas veces repetir algo                  | `\{`, `\}`      |      |
| \`       | \`              | Barra vertical                              | O (alternativa) | `\|` |
| `\`      | Barra invertida | Carácter de escape                          | `\\`            |      |


🔹 EJEMPLOS PRÁCTICOS
| Patrón     | Significado                          | Coincide con…         |
| ---------- | ------------------------------------ | --------------------- |
| `/gato./`  | "gato" seguido de cualquier carácter | `"gatos"`, `"gato "`  |
| `/gato\./` | "gato." (con punto literal)          | `"gato."`             |
| `/\d\d\d/` | Tres dígitos seguidos                | `"123"`, `"456"`      |
| `/\w+/`    | Una o más letras/números             | `"hola"`, `"user123"` |
| `/\s/`     | Un espacio                           | `" "`                 |



*/

// Esto es lo mismo de arriba de la tabla de arriba pero escrito manualmente por Mi

// - Clases básicas
// .	Comodín, significa cualquier caracter (letra, número, símbolo...), pero que ocupe sólo 1 carácter.
// \ 	Precedido de un carácter especial, lo invalida (se llama «escapar»).
// const regexp = /gato./;
// console.log(regexp.test("gato.")); // true
// console.log(regexp.test("gatosa")); // true
// console.log(regexp.test("gatos ")); // true

// const regexp2 =/gato\./;
// console.log(regexp2.test("gato.")); // true (es literalmente el punto)
// console.log(regexp2.test("gatosa")); // false
// console.log(regexp2.test("gatos ")); //false


// - Conjunto de caracteres
// []	 Rango de caracteres. Cualquiera de los caracteres del interior de los corchetes.
// [^] Que no exista cualquiera de los caracteres del interior de los corchetes.
// |	 Establece una alternativa: lo que está a la izquierda o lo que está a la derecha. 
// const regexp3 = /[aeiou]/i;
// console.log(regexp3.test("a")); // true
// console.log(regexp3.test("E")); // true
// console.log(regexp3.test("t")); // false

// const regexp4 = /[^aeiou]/i;
// console.log(regexp4.test("a")); // false
// console.log(regexp4.test("E")); // false
// console.log(regexp4.test("t")); // true
// console.log(regexp4.test("m")); // true

// const regexp5 = /casa|cama/;
// console.log(regexp5.test("casa")); // true
// console.log(regexp5.test("cama")); // true
// console.log(regexp5.test("capa")); // false

// const regexp6 = /cas(i|o)ta/;
// console.log(regexp6.test("casita")); // true
// console.log(regexp6.test("casota")); // true
// console.log(regexp6.test("casa")); // false
// console.log(regexp6.test("caseta")); // false

// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
// - Rangos de caracteres 
/* 
Caracter especial	  Alternativa	  Descripción
[0-9]	              \d	          Un dígito del 0 al 9.
[^0-9]	            \D	          No exista un dígito del 0 al 9.
[A-Z]		                          Letra mayúscula de la A a la Z. Excluye ñ o letras acentuadas.
[a-z]		                          Letra minúscula de la a a la z. Excluye ñ o letras acentuadas.
[A-Za-z0-9]	        \w	          Carácter alfanumérico (letra mayúscula, minúscula o dígito).
[^A-Za-z0-9]	      \W	          No exista carácter alfanumérico (letra mayúscula, minúscula o dígito).
[\t\r\n\f]	        \s	          Carácter de espacio en blanco (espacio, TAB, CR, LF o FF).
[^\t\r\n\f]	        \S	          No exista carácter de espacio en blanco (espacio, TAB, CR, LF o FF).
                    \xN	          Carácter hexadecimal número N.
                    \uN	          Carácter Unicode número N.
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
*/


// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
// - Anclas: Permiten delimitar los patrones de búsqueda e indicar si empiezan o terminan por caracteres concretos
/* 
Caracter especial	  Descripción
^	                  Ancla. Delimita el inicio del patrón. Significa empieza por.
$	                  Ancla. Delimita el final del patrón. Significa acaba en.
\b	                Límite de una palabra separada por espacios, puntuación o inicio/final.
\B	                Opuesta al anterior. Posición entre 2 caracteres alfanuméricos o no alfanuméricos.
*/
// 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴


// const regexp8 = /^mas/i; // Debe empezar por más
// console.log(regexp8.test("mas")); // true
// console.log(regexp8.test("Formas")); // false
// console.log(regexp8.test("Master")); // true (empieza por "mas" y tiene el flag «i»)
// console.log(regexp8.test("masticar")); // true 

// const regexp9 = /do$/i;
// console.log(regexp9.test("do")); // true
// console.log(regexp9.test("Vívido")); // true
// console.log(regexp9.test("Vívidos")); // false

// - Por otro lado, si utilizamos \b se nos permite indicar si el texto adyacente está seguido (o precedido) de un límite de palabra (espacio), puntuación (comas o puntos) o inicio o final del STRING :

// const regexp11 = /fo\b/;
// console.log(regexp11.test("Esto es un párrafo de texto.")); // true (tras "fo" hay un límite de palabra)
// console.log(regexp11.test("Esto es un párrafo.")); // true (tras "fo" hay un signo de puntuación)
// console.log(regexp11.test("Un círculo de forma.")); // false (tras "fo" sigue la palabra)
// console.log(regexp11.test("Frase que termina con fo")); // true (tras "fo" termina el string)

// - Por último, \B es la operación opuesta a \b, por lo que podemos utilizarla cuando nos interesa que el texto no esté delimitado por una palabra, que este dentro de palabra.

// const regex12 = /fo\B/;
// console.log(regex12.test("Esto es un párrafo de texto.")); // false (tras "fo" hay un límite de palabra)
// console.log(regex12.test("Esto es un párrafo jajaja")); // false
// console.log(regex12.test("Un círculo de forma.")); // true (tras "fo" sigue la palabra)
// console.log(regex12.test("Frase que termina con fo")); // false


// - Cuantificadores
/* 
Caracter especial	Descripción
*	                El carácter anterior puede aparecer 0 o más veces.
+                 El carácter anterior puede aparecer 1 o más veces.
?	                El carácter anterior puede aparecer o no (es opcional).
{n}	              El carácter anterior aparece n veces.
{n,}	            El carácter anterior aparece como mínimo n o más veces.
{n,m}	            El carácter anterior aparece de n a m veces.
*/
// Cuantificador * --> (0 o más veces):
// const regex13 = /a*/;
// console.log(regex13.test(""));    // true ('a' aparece 0 o más veces)
// console.log(regex13.test("a"));   // true ('a' aparece 1 veces)
// console.log(regex13.test("aa"));  // true ('a' aparece 2 veces)
// console.log(regex13.test("aba")); // true ('a' aparece 2 veces)
// console.log(regex13.test("bbb")); // true ('a' aparece 0 veces)

// cuantificador + -> (1 o más veces):
// const regex14 = /a+/;
// console.log(regex14.test(""));    // false ('a' aparece 0 veces)
// console.log(regex14.test("a"));   // true ('a' aparece 1 veces)
// console.log(regex14.test("aa"));  // true ('a' aparece 2 veces)
// console.log(regex14.test("aba")); // true ('a' aparece 2 veces)
// console.log(regex14.test("bbb")); // false ('a' aparece 0 veces)

// cuantificador ? -> (0 o 1 vez):
// const regexp15 = /a?/;
// const texto = "casa";
// match : devuelve un array con todas las coincidencias de "a" o de "" (nada), en cada posición del texto.
// console.log(texto.match(regexp15));    
// console.log(regexp15.test("a"));   // true ('a' aparece 1 vez)
// console.log(regexp15.test("aa"));  // true ('a' aparece 1 vez)
// console.log(regexp15.test("aba")); // true ('a' aparece 1 vez)
// console.log(regexp15.test("bbb")); // true ('a' aparece 0 vez)

// - Cuantificadores numéricos - se utilizan cuando necesitamos concretar más el número de repeticiones del caracter anterior.
// {n}    indica un número exacto
// {n,}   indica al menos n veces 
// {n,m}  establece que se puede repetir de n a m veces:
// esto /[0-9]{2}/ <- es lo mismo -> /\d{2}
// const regexp16 = /[0-9]{2}/;
// console.log(regexp16.test(42)); // true
// console.log(regexp16.test(82)); // true
// console.log(regexp16.test(1)); // false (no son 2 dígitos)
// console.log(regexp16.test(100)); // true -> porque en la expresión regular no se han establecido anclas

// - Cuantificadores numéricos con anclas
// const regexp17 = /^[0-9]{2}$/;
// console.log(regexp17.test(42)); // true
// console.log(regexp17.test(4)); // false
// console.log(regexp17.test(55)); // true
// console.log(regexp17.test(100)); // false (no tiene exáctamente 2 dígitos)

// const regexp20 = /^b{3,}$// -> Al menos n veces n;
// console.log(regexp20.test("bbb")); // true
// console.log(regexp20.test("b")); // false
// console.log(regexp20.test("bbbb")); // true
// console.log(regexp20.test("bbbbbbb")); // true


// const regexp18 = /^[0-9]{2,5}$/;
// console.log(regexp18.test(42)); // true
// console.log(regexp18.test(4)); // false (no tiene de 2 a 5 dígitos)
// console.log(regexp18.test(55)); // true
// console.log(regexp18.test(1534)); //true
// console.log(regexp18.test(15331234)); //false (no tiene de 2 a 5 dígitos)


// Regexp utilizados
// email:
const regexEmail = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
console.log(regexEmail.test("tL2H3@example.com"));
// password:
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
console.log(regexPassword.test("12345678"));
// phone:
const regexPhone = /^[0-9]{9}$/;
console.log(regexPhone.test("123456789"));
// postal code:
const regexPostalCode = /^[0-9]{5}$/;
console.log(regexPostalCode.test("12345"));
// date:
const regexDate = /^\d{4}-\d{2}-\d{2}$/;
console.log(regexDate.test("2021-12-31"));
// time:
const regexTime = /^\d{2}:\d{2}:\d{2}$/;
console.log(regexTime.test("12:12:12"));
// credit card:
const regexCreditCard = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
console.log(regexCreditCard.test("1234-1234-1234-1234"));
// ip:
const regexIp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
console.log(regexIp.test("237.84.2.178"));
// url:
const regexUrl = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
console.log(regexUrl.test("https://www.example.com"));