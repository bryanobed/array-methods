// Evita las rutas relativas
// Lo siguiente es una buena practica y debe usarse siempre, pero puedes hacerlo más legible en el desarrollo
// import { getLevel } from "../levels.js";
// import { Manager } from "../../components/InformationManager.js";
// import { setColor } from "../../../Colors/ColorUtils.js";

// Así es más legible o llamémosle elegante
// import { getLevel } from "@/modules/levels.js";
// import { Manager } from "@/components/InformationManager.js";
// import { setColor } from "@/classes/Colors/ColorUtils.js";

// Formas de solucionarlo
/* 
Alias	          Ruta real
@/components	  Acceso directo a ./src/components
@/modules	      Acceso directo a ./src/modules
@/classes	      Acceso directo a ./src/classes
*/

// -----> Usando Vite: puedes crear o modificar el fichero vite.config.js e incluir o modificar la propiedad resolve de su configuración, añadiendo las rutas que quieres utilizar. En nuestro caso, haríamos lo siguiente:

// Paso 1: fichero vite.config.js
// export default defineConfig({

//   resolve: {
//     alias: {
//       // "@": new URL("./src", import.meta.url).pathname
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//     }
//   },
//   /* ... */
// });

// Paso 2: jsconfig.json o tsconfig.json
// {
//   "compilerOptions": {
//     "baseUrl": ".",       // El punto de partida (la raíz del proyecto)
//     "paths": {
//       "@/*": ["src/*"]   // Le dice al editor que "@" apunta a la carpeta "src"
//     }
//   },
//   "exclude": ["node_modules", "dist"]
// }

// Paso 3 usar el alias
// En lugar de rutas relativas como esta:
// import Header from '../../../components/Header.vue'

// Usar:
// import Header from '@/components/Header.vue'

// También funciona con imágenes, composables, estilos, etc.:
// import logo from '@/assets/logo.png'
// import useAuth from '@/composables/useAuth.js'


// ------> Usando TypeScript
// {
//   /* ... */
//   "compilerOptions": {
//     "baseUrl": ".",
//     "paths": {
//       "@/*": ["src/*"],
//     }
//   }
// }


// ------> Barrel imports
// En nuestro fichero principal, importamos de esta forma
// import { module1, module2, module3 } from "./modules/index.js";
// // En /modules/index.js exportamos ficheros de rutas externas
// export { module1 } from "./module1.js";
// export { module2 } from "./module2.js";
// export { module3 } from "./module3.js";

// Import dinámico en Javascript