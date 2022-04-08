// Hacer una funciòn que reciba un array de nùmeros y me devuelva aquellos que son narcisitas.
import isNarcissist from "./santi_training/practice17";
import getSequence from './practice04.js'
let arrayParaProbar = getSequence(1,1000)

const ImBackNarcissists = (arrayNumbers)=>{
    const arrayNarcissist= []
    for(let i=0; i < isNarcissist.length; i++){
        let NarcissistNumber = isNarcissist(arrayNumbers[i])
        if (NarcissistNumber == true){
            arrayNarcissist.push(arrayNumbers[i])
        }
    }
    return arrayNarcissist

}

console.log(ImBackNarcissists(arrayParaProbar))