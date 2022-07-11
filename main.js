class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(titulo, autor) {
    this.libros.push({ titulo: titulo, autor: autor });
  }

  getBookNames() {
    let titulos = [];
    this.libros.forEach((element) => titulos.push(element.titulo));
    return titulos;
  }
}

const user1 = new Usuario(
  "Juan",
  "Pérez",
  [
    { titulo: "Narciso y Goldmundo", autor: "Herman Hesse" },
    { titulo: "El viejo y el mar", autor: "Ernest Hemingway" },
    { titulo: "El agente secreto", autor: "Joseph Conrad" },
  ],
  ["perro", "gato", "tigre"]
);

console.log(user1.getFullName());
user1.addMascota("ballena");
console.log(`El número de mascotas es: ${user1.countMascotas()}`);
user1.addBook("El señor de las moscas", "William Golding");
console.log(user1.getBookNames());
