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

let $tbody =document.getElementById("estudiantes")

data.map(e=>{
  $tbody.innerHTML += ""
})