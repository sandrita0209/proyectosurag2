//IMPORTACIONES
import {capturarDatos} from '../formularios/formularioMedicos.js'

//etiquetas que controlo:
console.log ("hola")

let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetaDocumento=document.getElementById("documento")
let etiquetaEspecialidad=document.getElementById("especialidad")
let etiquetaRegistroprofesional=document.getElementById("Registroprofesional")
let etiquetaCorreElectronico=document.getElementById("CorreoElectronico")
let etiquetaSede=document.getElementById("sede")
let etiquetaHorarios=document.getElementById("Horarios")
let etiquetaDescripcion=document.getElementById ("Descripcion")
let etiquetaFotografia=document.getElementById ("Fotografia")



///detectar el evento de clic
etiquetaBoton.addEventListener("click",function(evento){
     
 evento.preventDefault()
 capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaRegistroprofesional,etiquetaCorreElectronico,etiquetaSede,etiquetaHorarios,etiquetaDescripcion,etiquetaFotografia)
})

