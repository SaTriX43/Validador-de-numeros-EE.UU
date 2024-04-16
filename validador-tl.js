const d = document;

// 1.- creamos funcion export 
export function validarNumeroTelefonico(input,revisar,limpiar,mostrar) {

    // 2.- Definimos variables
    const $input = d.querySelector(input),
        $revisar = d.querySelector(revisar),
        $limpiar = d.querySelector(limpiar),
        $mostrar = d.querySelector(mostrar);


        // creanos una funcion de mostrarMensaje() 
        function mostrarMensaje(mensaje,esValido) {
            let $mensaje = d.createElement('div');
                $mensaje.textContent = mensaje;

                if(esValido) {
                    $mensaje.classList.add('correct');
                }else {
                    $mensaje.classList.add('incorrect')
                }

                $mostrar.appendChild($mensaje)
        }
        
        // --------------------------------------------------------------------------------- 
        // creamos funcion que detectar si el numero es valido
        function validacion(numero) {
            // declaramos variable numero 
            let numeros = numero.replace(/\D/g, "");

            // si el valor es igual a vacio entonces 
            if(numero === '') {
                // mostramos en un alert
                alert('Please provide a phone number')
                return false;
            }

            // si el valor no es un numero del 1 al 9 y no es - entonces 
            else if(!/^[-0-9\s()+]+$/.test(numero)){
                // llamamos funcion mostrarMensaje 
                mostrarMensaje(`Invalid US number: ${numero}`,false)
                return false
            }

            // si la longitud de numeros es igual a 10 entonces 
            else if(numeros.length === 10 || (numeros.length === 11 && numeros.startsWith('1'))) {
                // llamamos funcion mostrarMensaje 
                mostrarMensaje(`Valid US number: ${numero}`,true)

            }else{//si no
                // llamamos function mostrarMensaje 
                mostrarMensaje(`Invalid US number: ${numero}`,false)
            }
        }

        // creamos listener en el document 
        d.addEventListener('click',e=> {

            // si el evento es igual a $revisar entonces 
            if(e.target === $revisar) {
                validacion($input.value)
                $input.value = ""
            }

            // si el evento es igual a $limpiar entonces 
            if(e.target === $limpiar) {
                // en $mostrar en su propiedad innerHTML vacialo 
                $mostrar.innerHTML = "";
            }
        })
}