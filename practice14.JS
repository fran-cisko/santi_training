//03.Hacer una función que reciba un número y nos devuelva la suma de todos sus dígitos elevados al cubo
let numberin = 34335

const getCubicNumber = (numerito)=>{
    let stringNumberin = String(numerito)
    let arrayinNumberin = [] 
    let cubicDigit = []
    let sumCubicDigit = []

    for(let i = 0 ; i < stringNumberin.length; i++){
        arrayinNumberin.push(Number(stringNumberin[i]))
    }
    
    for(let i = 0 ; i < arrayinNumberin.length; i++){
        cubicDigit.push(Math.pow(arrayinNumberin[i], 3))
        console.log(cubicDigit)
    }
    
    return SumCubicDigit

}
console.log(getCubicNumber(numberin))