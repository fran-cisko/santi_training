// -Hacer una función que reciba un número entero y devuelva un array conteniendo
// todos los divisores de ese número, excepto el número mismo. Por ejemplo, si el número es 12 tiene que devolver [1,2,3,4,6]
let numerito = 496
let getDivisores = (num) =>{
    let array_divisores= []

    for(let d = 1 ; d < num ; d++ ){
        if(num % d == 0){
            array_divisores.push(d)
        }
    }

    return array_divisores
}



export default getDivisores