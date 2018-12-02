

 function  validar() {
        
        let valido = true;
        nombre = contacto.nombre.value;
        if (nombre == '') {
            alert('Es obligatorio poner el nombre');
            valido = false;
        }
        apellidos = contacto.apellidos.value;
        if (valido && apellidos == '') {
            alert('Es obligatorio poner apellidos');
            valido = false;
        }
        edad = contacto.edad.value;
        if (valido && edad == '') {
            alert('Es obligatorio poner edad');
            valido = false;
        }
        email = contacto.email.value;
        if (valido && email == '') {
            alert('Es obligatorio poner e-mail');
            valido = false;
        }
        telefono = contacto.telefono.value;
        if (valido && telefono == '') {
            alert('Es obligatorio poner telefono');
            valido = false;
        }
        if (valido && !(contacto.sexo[0].checked ||
            contacto.sexo[1].checked)) {
            alert('El sexo es campo obligatorio');
            valido = false;
        }
        consulta = contacto.consulta.value;
        if (valido && consulta == '' ) {
            alert('Es obligatorio escribir una consulta');
            valido = false;
        }
        if (valido && consulta.length <= 29 ) {
            alert('La consulta debe tener al menos 30 caracteres');
            valido = false;
        }
        
        event.returnValue = valido;
    }