/* Introduccion */
function inventario(nombre) {
 this.nombre = nombre
 this.articulos = []
}

inventario.prototype.getNombre = function () {
 return this.nombre
}
inventario.prototype.add = function (articulo, cantidad) {
 this.articulos[articulo] = cantidad
}

inventario.prototype.cantidad = function (articulo) {
 return this.articulos[articulo]
}

let libros = new inventario('libros')
libros.getNombre()
libros.add('Aprendiendo Javascript', 5)
libros.cantidad('Aprendiendo Javascript')

/* Bucles */
const libro = {
 titulo: 'Aprendiendo Javascript',
 autores: 'Jp, linda, tania, nicky',
 numpaginas: 100,
 editorial: 'programacionsena',
 precio: '24.9',
}

const props = Object.getOwnPropertyNames(libro)
props.forEach((name) => {
 let valor = Object.getOwnPropertyDescriptor(libro, name).value
 console.log(`La prop ${name} contiene: ${valor}`)
})

for (let prop in libro) {
 console.log(`La prop ${prop} contiene: ${libro[prop]}`)
}

/* Datos y clases */
const fecha = new Date()
fecha.toString().split(' ')

fecha.toString().split(' ')[1]
fecha.toString().split(' ')[2]
fecha.toString().split(' ')[3]
fecha.toString().split(' ')[4]
fecha.toString().split(' ')[5]

/* Arrays */
const posts = [
 {
  id: 1,
  title: 'Mi primer post',
  image: 'https://image/1',
  tags: ['javascript, webdevelopment'],
 },
 {
  id: 2,
  title: 'Mi experiencia con react',
  image: 'https://image/2',
  tags: ['javascript, webdevelopment'],
 },
 {
  id: 3,
  title: 'Mi tercer post',
  image: 'https://image/3',
  tags: ['javascript, webdevelopment'],
 },
 {
  id: 4,
  title: 'No sabemos que poner aca',
  image: 'https://image/4',
  tags: ['javascript, webdevelopment'],
 },
]

posts.map((post) => post.title)

posts.map((post) => post.image)

posts.map((post) => post.tags)

/* This */
var obj = {
 foo: function () {
  return 'foo'
 },
 bar: function () {
  document.addEventListener('click', (event) => this.foo())
 },
}

/* Clousures */
const miContador = (function () {
 let _contador = 0

 function incrementar() {
  return _contador++
 }

 function decrementar() {
  return _contador--
 }

 function valor() {
  return _contador
 }

 return {
  incrementar,
  decrementar,
  valor,
 }
})()

miContador.valor()
miContador.incrementar()
miContador.valor()
miContador.incrementar()
miContador.incrementar()
