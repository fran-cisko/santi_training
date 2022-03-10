// -Hacer una función que reciba un array de números y devuelva otro array con sólo aquellos que son perfectos

import getSequence from './practice04.js'
import isPerfect from './practice11.js'

let arrayParaProbarCosas = getSequence(1,1000)


let getOnlyPerfect = (numbers) =>{
    let onlyPerfects = []
    for(let i = 0 ; i < numbers.length; i++){
       let esPerfecto = isPerfect(numbers[i])
       if(esPerfecto == true){
           onlyPerfects.push(numbers[i])
       }

    }

    return onlyPerfects

}

console.log(getOnlyPerfect(arrayParaProbarCosas))