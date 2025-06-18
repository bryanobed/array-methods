// class Padre {
//   soloPadre() { console.log("Tarea en el padre..."); }
//   padreHijo() { console.log("Tarea en el padre..."); }
//   sobreHijo() { console.log("Tarea en el padre..."); }
// }

// class Hijo extends Padre {
//   padreHijo() {
//     super.padreHijo();
//     console.log("Tarea en el hijo...");
//   }

//   soloHijo() { console.log("Tarea en el hijo..."); }
//   sobreHijo() { console.log("Tarea en el hijo..."); }
// }

// const hijo = new Hijo();
// hijo.padreHijo();
// hijo.soloHijo();
// hijo.sobreHijo();

// console.log("\n");

// const padre = new Padre();
// padre.padreHijo();
// padre.soloPadre();
// padre.sobreHijo();

// Herencia con extends y super()
// variables public y private
// ejemplo:
// class Person {
//   #name; // # variable privada
//   age; // variable publica
//   constructor(name, age) {
//     this.#name = name;
//     this.age = age;
//   }
//   getName() {
//     return this.#name;
//   }
//   getAge() {
//     return this.age;
//   }
// }

// class Student extends Person {
//   #grade; // variable privada
//   constructor(name, age, grade) {
//     super(name, age);
//     this.#grade = grade;
//   }

//   getGrade() {
//     return this.#grade;
//   }
// }

// const student = new Student("Bryan Obed", 20, 10);

// console.log(student.getName());
// console.log(student.getAge());
// console.log(student.getGrade());

// variables = atributos
// metodos = funciones
// this = es el objeto actual