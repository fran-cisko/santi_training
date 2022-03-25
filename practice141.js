//03.Hacer una función que reciba un número y nos devuelva la suma de todos sus dígitos elevados al cubo
let numberin = 123

const getCubicNumber = (numerito)=>{
    let stringNumberin = String(numerito)
    let sumCubicDigit = 0

    for(let i = 0 ; i < stringNumberin.length; i++){
        let numero = Number(stringNumberin[i])
        let cubo = Math.pow(numero, 3)
        sumCubicDigit += cubo
    }
       
    
    return sumCubicDigit

}
console.log(getCubicNumber(numberin))