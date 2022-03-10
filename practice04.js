//-Crear una función que reciba 2 números enteros y devuelva un array con todos los números entre uno y otro

let getSequence = function (num1, num2){
    let between = []
    for(num1; num1<=num2; num1++){
        between.push(num1)
    }
    return between
}


export default getSequence