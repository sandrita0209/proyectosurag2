import {validarFormulario} from './validacionFormularioMedico.js'


// creamos una funcion que nos permita recibir los datos del fomrmulario
export function capturarDatos(etiquetaNombre,etiquetaDocumento, etiquetaEspecialidad,etiquetaRegistroprofesional,etiquetaCorreoElectronico,etiquetaSede,etiquetaHorarios,etiquetaDescripcion,etiquetaFotografia){
    
    let nombresMedico=etiquetaNombre.value
    let documentoMedico=etiquetaDocumento.value
    let especialidadMedico=etiquetaEspecialidad.value
    let Registroprofesional=etiquetaRegistroprofesional.value
    let CorreElectronico=etiquetaCorreoElectronico.value
    let sede=etiquetaSede.value
    let Horarios=etiquetaHorarios.valu
    let Descripcion=etiquetaDescripcion.value
    let Fotografia=etiquetaFotografia.value
    

     /*console.log(nombresMedico)
     console.log(documentoMedico)
     console.log(especualidadMedico)*/
     

     // debemos almacenar todos los valores del formulario
     // en una SOLA VARIABLE
     //OBJETO=ALMACENAR VARIOS DATOS EN 1  SOLO ESPACIO DE MEMORIA
     let datosFormularioMedico={
        nombre:nombresMedico,
        documento:documentoMedico,
        especialidad:especialidadMedico,
        Registro:Registroprofesional,
        correo:CorreElectronico,
        sede:sede,
        Horario:Horarios,
        Descripcion:Descripcion,
        foto:Fotografia,

     }
     console.log(datosFormularioMedico)
     
    


}



