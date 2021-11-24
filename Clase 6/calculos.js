function calcularMayor(array){
    let mayor = array[0];
    for (let i=0; i<array.length; i++){
        if (mayor < array[i]){
            mayor = array [i];
        }
    }
    return mayor;
}

function calcularMenor(array){
    let menor = array [0]
    for (let i=0; i<array.length; i++){
        if (menor > array[i]){
            menor = array[i];
        }
    }
    return menor;
}

function calcularPromedio(array){
    let total = 0;
    let promedio;
    for (let i=0; i<array.length; i++){
        total = total+array[i];
    }
    return promedio = total / array.length;
}

function calcularSalarioMensualPromedio(promedio){
    const mesesEnUnAnio = 12;
    let salarioMensualPromedio = 0;
    return salarioMensualPromedio = promedio / mesesEnUnAnio;
}


