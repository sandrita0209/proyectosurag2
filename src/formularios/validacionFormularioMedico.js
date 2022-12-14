export function validarFormulario(datos){
    
    //REFERENCIAS A ETIQUETAS QUE QUIERI VALIDAR
    let etiquetaNombre=document.getElementById("nombres")
    let etiquetaDocumento=document.getElementById("documento")
    let etiquetaRegistroprofesional=document.getElementById("Registroprofesional")

    //validemos  3  campos del formulario
    //nombres-documento-registro-registro del medico
    let nombresMedico=datos.nombre
    let documentoMedico=datos.documento
    let Registroprofesional=datos.Registroprofesional

    //AGREGAR TODOS LOS CAMINOS POSBLES PARA VALIDAR
    // EL FORMULARIO
    if(nombresMedico =="" && documentoMedico==""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.add ("is-invalid")

        Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Nombre y documento son obloigatorios',
  
})
        alert("ambos estan vacios")
    }else if (nombresMedico==""  && documentoMedico!=""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
    }else if (nombresMedico!="" && documentoMedico==""){
         etiquetaNombre.classList.remove ("is-invalid")
        etiquetaDocumento.classList.add ("is-invalid")
    }else{
        alert ("nos vamos para la bd")
         etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.add ("is-invalid")
    }





}