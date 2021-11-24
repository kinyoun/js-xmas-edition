const $form = document.querySelector('#carta-a-santa');
const nombre = $form.nombre.value
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

function validarNombre(nombre){
    if (nombre.length === 0){
        return 'El campo nombre debe tener al menos 1 caracter';
    }
    if (nombre.length >= 50){
        return 'El campo nombre debe tener menos de 50 caracteres';
    }
    if (!/^[a-z]+$/i.test(nombre)){
        return 'El campo nombre solo acepta letras';
    }
    return '';
}

function validarCiudad(ciudad){
    if (ciudad.length === 0){
        return 'El campo ciudad no puede estar vacío';
    }
    return '';
}

function validarDescripcionRegalo(descripcionRegalo){
    if (descripcionRegalo.length === 0){ 
        return 'El campo descripción regalo debe tener al menos 1 caracter';
    }
    else if (descripcionRegalo.length >= 100){
        return 'El campo descripción regalo debe tener menos de 100 caracteres';
    }
    else if (!/^[a-z0-9,\._ ]+$/i.test(descripcionRegalo)){
        return 'El campo descripción solo puede tener números y letras';
    }
    return '';
}

function validarFormulario(event){
    const $form = document.querySelector('#carta-a-santa');
    const nombre = $form.nombre.value
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo  
    };
    
    const esExito = manejarErrores(errores) === 0; 

    if(esExito){
        $form.className = 'oculto';
        document.querySelector('#exito').className = '';
    }
    
    event.preventDefault();
}

function manejarErrores(errores){
    const keys = Object.keys(errores);
    let cantidadErrores = 0; 
    
    keys.forEach(function(key){
        const error = errores[key];
        const $errores = document.querySelector('#errores');


        if (error){
            cantidadErrores++;
            $form[key].className = 'error'; 

            const $error = document.createElement('li');
            $error.innerText = error;
            $error.id = [key]+'error'

            if(!document.querySelector('#'+ key +'error')){
                $errores.appendChild($error);
            }
            
        }
        else {
            $form[key].className = '';
            if (document.querySelector('#'+ key +'error')){
                document.querySelector('#'+ key +'error').remove();
                }
        }
    });
    return cantidadErrores;
}

/*
function removerErrorPrevio(){
    const $listaErrores = document.querySelector('#'+ key +'error');
    return $listaErrores.remove();
}*/

$form.onsubmit = validarFormulario;

