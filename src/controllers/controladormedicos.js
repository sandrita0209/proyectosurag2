//etiquetas que controlo:
console.log ("hola")

let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenvio")
console.log(etiquetaBoton)
let etiquetaDocumento=document.getElementById("documento")

///detectar el evento de clic
etiquetaBoton.addEventListener("click",function(evento){
     
    evento.preventDefault()
    /*Swal.fire(
    'Exito!!',
    'El especialista ha sido registrado!',
    'success'
    )*/

    //recibiendo los datos dl formulario
    let nombresMedico=etiquetaNombre.value
    console.log(nombresMedico)

    let documentoMedico=etiquetaDocumento.value
    console.log(documentoMedico)
})

