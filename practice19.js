//10. Hacer una funciòn que reciba un array de nùmeros y me devuelva aquellos que son SUPERnarcisitas.
// 05.Hacer una función que reciba un número y devuelva la suma de cada uno de sus dígitos elevado a sí mismo.
// Si el numero que entra es igual al que sale es uno super narcisista.

import getSequence from './practice04.js'
let arrayParaProbar = getSequence(1,1000)
let numberin = 123

const getSuperNarcissist = (numerito)=>{
    let stringNumberin = String(numerito)
    let sumDigit = 0
   // let cantidadDigitosNumero = stringNumberin.length

    for(let i = 0 ; i < stringNumberin.length; i++){
        let numero = Number(stringNumberin[i])
        let digitos = Math.pow(numero, numero)
        let SuperNarcissistNumbers =[]
        sumDigit += digitos
    }
    if (sumDigit == numerito){
        SuperNarcissistNumber.push(sumDigit)
    } 
    
    return SuperNarcissistNumber
}



const getSuperNarcissists= (arrayNumbers)=>{
    const arraySuperNarcissists= []
    for(let i=0; i < getSuperNarcissist.length; i++){
        let SuperNarcissistNumber = getSuperNarcissist(arrayNumbers[i])
        if (SuperNarcissistNumber == true){
            arraySuperNarcissists.push(arrayNumbers[i])
        }
    }
    return arraySuperNarcissists

}

console.log(getSuperNarcissists(arrayParaProbar))