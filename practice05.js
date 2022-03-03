// -Crear una función que reciba un array de enteros y devuelva true si alguno de esos numeros es primo y false en caso contrario
import primo from './practice02.js'

let numeritos= [4, 6, 6, 8,80, 10, 21, 455]
let containsPrime = function (integers){
    for(let i=0 ; i<integers.length ; i++){
        if(primo(integers[i])){
            console.log(`el nùmero primo està en el ìndice ${i}, y es el nùmero ${integers[i]}`)
            return true
        }
    }

    return false
     
    
    
}

console.log(containsPrime(numeritos))