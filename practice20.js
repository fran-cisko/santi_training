
//01.Hacer una función que reciba 2 números (a y b) y me devuelva true si se da el caso de que la suma
//de los divisores de a es igual a b y la suma de los divisores de b es igual a a, false en caso contrario

import getSumDivisores from './practice10.js'


const isSumDivTrue = (a, b) => {
    let result= false
    let sumDivA = getSumDivisores(a)
    let sumDivB = getSumDivisores(b)
    
    if(sumDivA == b && sumDivB == a){
        result = true
    }
    return result
}

console.log(isSumDivTrue(220,284))