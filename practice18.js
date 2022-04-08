// Hacer una funciòn que reciba un array de nùmeros y me devuelva aquellos que son narcisitas.
import isNarcissist from "./practice17.js";
import getSequence from './practice04.js'
let arrayParaProbar = getSequence(1,1000)

const getNarcissists = (arrayNumbers)=>{
    const arrayNarcissist= []
    for(let i=0; i < arrayNumbers.length; i++){
        
        if (arrayNumbers[i] > 10 && isNarcissist(arrayNumbers[i])){
            arrayNarcissist.push(arrayNumbers[i])
        }
    }
    return arrayNarcissist

}

console.log(getNarcissists(arrayParaProbar))