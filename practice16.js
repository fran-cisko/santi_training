// 05.Hacer una función que reciba un número y devuelva la suma de cada uno de sus dígitos elevado a sí mismo.
// Si el numero que entra es igual al que sale es uno super narcisista.
let numberin = 123

const getCubicNumber = (numerito)=>{
    let stringNumberin = String(numerito)
    let sumDigit = 0
   // let cantidadDigitosNumero = stringNumberin.length

    for(let i = 0 ; i < stringNumberin.length; i++){
        let numero = Number(stringNumberin[i])
        let digitos = Math.pow(numero, numero)
        sumDigit += digitos
    }
    
    return sumDigit

}
console.log(getCubicNumber(numberin))

