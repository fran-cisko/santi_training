//8. Hacer una funciòn que reciba un nùmero entero y me devuelva true si es narcisista y false en caso contrario.
import getNumerosPotenciaDigitos from "./practice13.js";

let integerNumber = 371


const isNarcissist = (numerinEnterin) => {
    let narcisista = false
    if(getNumerosPotenciaDigitos(numerinEnterin) == numerinEnterin){
        narcisista = true

    }
    return narcisista
}

console.log(isNarcissist(integerNumber))
