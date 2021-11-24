function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'El campo nombre debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );
  
    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'El campo nombre debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
  
    console.assert(
        validarNombre('Fabricio') === '',
        'validar nombre fallo con un nombre válido',
    );
  
    console.assert(
        validarNombre('213463') === 'El campo nombre solo acepta letras',
        'validarNombre no validó que el nombre solo tenga letras',
    )
  }
  
  probarValidarNombre();
  
  
  function probarValidarCiudad(){
      console.assert(
      validarCiudad('') === 'El campo ciudad no puede estar vacío',
      'Validar ciudad no validó que la ciudad no este vacía',
      );
  
      console.assert(
          validarCiudad('Buenos Aires') === '',
          'Validar ciudad falló con una ciudad valida'
      )
  }
  
  probarValidarCiudad();
  
  function probarValidarDescripcionRegalo(){
      console.assert(
          validarDescripcionRegalo('') === 'El campo descripción regalo debe tener al menos 1 caracter',
          'validarDescripcionRegalo no validó que el regalo no se encuentre vacío',
      );
  
      console.assert(
          validarDescripcionRegalo('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') ===
          'El campo descripción regalo debe tener menos de 100 caracteres',
          'validarDescripcionRegalo no validó que regalo tenga menos de 100 caracteres',
      );
  
      console.assert(
          validarDescripcionRegalo('Quiero una bicicleta') === '',
          'validarDescripcionRegalo falló con un string valido'
      );
  
      console.assert(
          validarDescripcionRegalo('.#$$!!.,') === 'El campo descripción solo puede tener números y letras',
          'validarDescripcionRegalo no validó que fueran solo números y letras'
      );
  }
  
  probarValidarDescripcionRegalo();
