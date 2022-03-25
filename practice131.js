//04.Hacer una función que reciba un número y nos devuelva la suma de todos sus dígitos elevados a 
//un número igual a la cantidad de dígitos que tiene
// Si el numero que entra es igual al que sale es uno narcisista.
let numberin = 153

const getNumerosPotenciaDigitos = (numerito)=>{
    let stringNumberin = String(numerito)
    let sumDigit = 0
    let cantidadDigitosNumero = stringNumberin.length

    for(let i = 0 ; i < stringNumberin.length; i++){
        let numero = Number(stringNumberin[i])
        let potencia = Math.pow(numero, cantidadDigitosNumero)
        sumDigit += potencia
    }
       
    
    return sumDigit

}
// console.log(getNumerosPotenciaDigitos(numberin))

export default getNumerosPotenciaDigitos