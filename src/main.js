import './style.css'

const data = [
  {
    nombre: "Juan Pérez",
    codigo: "A001",
    curso: "Matemáticas",
    promedio: 15.5,
    estado: "Aprobado"
  },
  {
    nombre: "María López",
    codigo: "A002",
    curso: "Historia",
    promedio: 12.3,
    estado: "Aprobado"
  },
  {
    nombre: "Carlos Gómez",
    codigo: "A003",
    curso: "Física",
    promedio: 9.8,
    estado: "Desaprobado"
  },
  {
    nombre: "Ana Torres",
    codigo: "A004",
    curso: "Química",
    promedio: 17.2,
    estado: "Aprobado"
  },
  {
    nombre: "Luis Ramírez",
    codigo: "A005",
    curso: "Lengua",
    promedio: 10.5,
    estado: "Aprobado"
  }
];


document.addEventListener("DOMContentLoaded", () => {  
  let $tbody = document.getElementById("estudiantes")
  data.forEach(e => {
    $tbody.innerHTML += `
    <tr class="hover:bg-blue-100">
      <th scope="row">${e.nombre}</th>
      <th>${e.codigo}</th>
      <th>${e.curso}</th>
      <th>${e.promedio}</th>
      <th>${e.estado}</th>
    </tr>
  `
  })
})


