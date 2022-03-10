//-Hacer una función que reciba un número entero y me devuelva la suma de todos sus divisores.
import getDivisores from './practice09.js'

let getSumDivisores = ( num ) =>{
    let result = 0
    let divNum = getDivisores(num)
    
    for( let i = 0 ; i < divNum.length; i++){
        result += divNum[i]
    }

    return result
}


export default getSumDivisores