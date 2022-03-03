//-Crear una función que reciba un array de enteros y devuelva true si todos los números son primos y false en caso contrario
import primo from './practice02.js'

let numeritos= [5,7,11]
let containsPrime = function (integers){
    for(let i=0 ; i<integers.length ; i++){
        if(!primo(integers[i])){
          console.log(`el nùmero no primo està en el ìndice ${i}, y es el nùmero ${integers[i]}`)
            return false
        }
    }

    return true
     
    
    
}

console.log(containsPrime(numeritos))