const d = document;

// 1.- creamos funcion export 
export function validarNumeroTelefonico(input,revisar,limpiar,mostrar) {

    // 2.- Definimos variables
    const $input = d.querySelector(input),
        $revisar = d.querySelector(revisar),
        $limpiar = d.querySelector(limpiar),
        $mostrar = d.querySelector(mostrar);


        // 3.-crear funcion para errores 
        function detectarErrores(numero){
           
            // si el valor es igual a vacio entonces 
            if(numero === '') {
                 // mostramos en un alert
                alert('Please provide a phone number')
                return false;
            }

            // si el valor no es un numero del 1 al 9 y no es - entonces 
            if(!/^[-0-9]+$/.test(numero)){
                $mostrar.innerHTML += `
                <p>Invalid US number: ${numero}</p>`
            }


        }

        
        // creamos funcion que detectar si el numero es valido
        function validarNumero(numero) {
            let numeros = numero.replace(/\D/g, "");

            return numeros.length === 10;
        }


        // creamos listener en el document 
        d.addEventListener('click',e=> {

            // si el evento es igual a $revisar entonces 
            if(e.target === $revisar) {
                detectarErrores($input.value)
            }

            // si el evento es igual a $limpiar entonces 
            if(e.target === $limpiar) {
                // en $mostrar en su propiedad innerHTML vacialo 
                $mostrar.innerHTML = "";
            }
        })
}