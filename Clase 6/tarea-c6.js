document.querySelector('#enviar-numero-familiares').onclick = function(){
    const $numeroFamiliares = document.querySelector('#numero-familiares');
    const numeroFamiliares = Number($numeroFamiliares.value);
    
    borrarIntegrantes();
    crearIntegrantes(numeroFamiliares);
    if (numeroFamiliares>0){
        mostrarElemento('boton-calcular');
        mostrarElemento('instruccion');
    } else {   
        ocultarElemento('boton-calcular');
        ocultarInstrucciones('instruccion');
    }

    return false;
}

document.querySelector('#boton-calcular').onclick = function (){
    const edadFamiliares = generarArrayIntegrantes();
    const resultadoMayorEdad = calcularMayor(edadFamiliares);
    const resultadoMenorEdad = calcularMenor(edadFamiliares);
    const resultadoPromedio = calcularPromedio(edadFamiliares);
    mostrarResultado(resultadoMayorEdad, resultadoMenorEdad, resultadoPromedio);
    mostrarElemento('resetear');
    mostrarElemento('agregar');
    mostrarElemento('quitar');
    mostrarElemento('siguiente-tarea');
    mostrarElemento('calcular-salario');

    return false;
}

function crearIntegrante(i){
    const $nodoIntegrante = document.createElement('div'); 
    $nodoIntegrante.setAttribute('class', 'integrantes');
   
    const $labelIntegrante = document.createElement('label'); 
    $labelIntegrante.setAttribute('type', 'text'); 
    $labelIntegrante.setAttribute('class', 'label-integrante');
    $labelIntegrante.textContent = 'Integrante n° ' + (i + 1) + ' ';
    $nodoIntegrante.appendChild($labelIntegrante); 

    const $inputIntegrante = document.createElement('input');
    $inputIntegrante.setAttribute('type', 'number');
    $inputIntegrante.setAttribute('placeholder', 'Edad')
    $inputIntegrante.setAttribute('class', 'integrante');
    $nodoIntegrante.appendChild($inputIntegrante);

    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($nodoIntegrante);

    return false;
}

function crearIntegrantes(numeroFamiliares){
    for ( let i=0; i<numeroFamiliares; i++){
        crearIntegrante(i);
    };
}

function generarArrayIntegrantes(){
    const $edadIntegrantes = document.querySelectorAll('.integrante');
    let arrayIntegrantes = [];
    for(let i=0; i<$edadIntegrantes.length; i++){
        if ($edadIntegrantes[i].value === ''){
            continue
        }
        arrayIntegrantes.push(Number($edadIntegrantes[i].value));
    }
    return arrayIntegrantes;
};

function mostrarResultado(resultadoMayorEdad, resultadoMenorEdad, resultadoPromedio){
    document.querySelector('#resultado').className = '';
    document.querySelector('#mayor-edad').textContent = resultadoMayorEdad;
    document.querySelector('#menor-edad').textContent = resultadoMenorEdad;
    document.querySelector('#promedio-edad').textContent = resultadoPromedio;
}

document.querySelector('#resetear').onclick = function (){
    borrarIntegrantes();
    ocultarElemento('boton-calcular');
    ocultarElemento('instruccion');
    ocultarElemento('resultado');
    ocultarElemento('resetear');

    ocultarElemento('agregar');
    ocultarElemento('quitar');
    ocultarElemento('siguiente-tarea');
    ocultarElemento('calcular-salario');
    reiniciarSalarioAnual();
}

function borrarIntegrantes(){
    const $integrantes = document.querySelectorAll('.integrantes');
    for(let i=0; i<$integrantes.length; i++){
        $integrantes[i].remove();
    }
}

document.querySelector('#agregar').onclick = function(){
    agregarSalarioAnual();

    return false;
}

document.querySelector('#quitar').onclick = function(){
    quitarSalarioAnual();

    return false;
}

function agregarSalarioAnual(i){
    const $nodoSalario = document.createElement('div');
    $nodoSalario.setAttribute('class', 'salario');

    const $labelSalario = document.createElement('label');
    $labelSalario.setAttribute('type', 'text');
    $labelSalario.setAttribute('class','label-salario');
    $labelSalario.textContent = 'Salario anual del integrante ';

    const $inputSalario = document.createElement('input');
    $inputSalario.setAttribute('type', 'number');
    $inputSalario.setAttribute('class', 'input-salario');

    $nodoSalario.appendChild($labelSalario);
    $nodoSalario.appendChild($inputSalario);

    const $divSalario = document.querySelector('#salarios');
    $divSalario.appendChild($nodoSalario);
    
    return false;
}

function quitarSalarioAnual(){
    const $salarioAnualIntegrante = document.querySelector('.salario');
    $salarioAnualIntegrante.remove();
}

document.querySelector('#calcular-salario').onclick = function (){
    const arraySalarios = generarArraySalario();
    const mayorSalario = calcularMayor(arraySalarios);
    const menorSalario = calcularMenor(arraySalarios);
    const salarioAnualPromedio = calcularPromedio(arraySalarios);
    const salarioMensualPromedio = calcularSalarioMensualPromedio(salarioAnualPromedio);
    mostrarResultadoSalario(mayorSalario, menorSalario, salarioAnualPromedio, salarioMensualPromedio);

    return false;
}

function mostrarResultadoSalario(mayorSalario, menorSalario, salarioAnualPromedio, salarioMensualPromedio){
    document.querySelector('#resultado-salario').className = '';
    document.querySelector('#mayor-salario').textContent = mayorSalario;
    document.querySelector('#menor-salario').textContent = menorSalario;
    document.querySelector('#anual-promedio').textContent = salarioAnualPromedio;
    document.querySelector('#mensual-promedio').textContent = salarioMensualPromedio;

    return false;
}

function generarArraySalario(){
    let arraySalario = [];
    let $inputSalario = document.querySelectorAll('.input-salario');
    for (let i=0; i<$inputSalario.length; i++){
        if ($inputSalario[i].value === ''){
            continue}
        arraySalario.push(Number($inputSalario[i].value));
    }
    return arraySalario;
}

function reiniciarSalarioAnual(){
    const $salarioAnualIntegrantes = document.querySelectorAll('.salario');
    for (let i=0; i<$salarioAnualIntegrantes.length; i++){
        $salarioAnualIntegrantes[i].remove();
    }
}

function mostrarElemento(elemento){
    document.querySelector('#'+ elemento).className = '';
}

function ocultarElemento(elemento){
    document.querySelector('#'+ elemento).className = 'oculto';
}
/////Tarea C8 - validaciones
const $form = document.querySelector('#calculador-edades');
const numeroFamiliares = $form['numero-familiares'].value;

function validarNumeroFamiliares(numeroFamiliares){
    if (!/^[0,9]$/.test(numeroFamiliares)){
       return 'Este campo solo acepta números enteros'
    }
    return '';
}
