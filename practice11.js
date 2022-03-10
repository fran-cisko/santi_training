//-Hacer una función que reciba un número entero y me devuelva
//true si la suma de sus divisores es igual al número y false el caso contrario.
import getSumDivisores from "./practice10.js";


const isPerfect = (n) =>{
    let result = false
    let sumDiv = getSumDivisores(n)
   
    if(sumDiv == n){
        result = true
    }
    return result
}

export default isPerfect