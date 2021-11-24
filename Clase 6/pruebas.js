function probarValidarNumeroFamiliares(){
    console.assert(
        validarNumeroFamiliares('10,5') === 'Este campo solo acepta números enteros',
        'La función validar numero familiares no validó que solo se utilicen números enteros.'
    )
}

probarValidarNumeroFamiliares();
