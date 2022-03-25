// una variable que tenga un string

let coso = "algo que le puse"
let numerin = 5786
let arrayin = Array.from(coso)
let arrayinNumber = Array.from(String(4621))
console.log("es este, fijate", arrayinNumber)
console.log(arrayin)

const getSumaDigitos = (enterin)=>{
    let stringEnterin= String(enterin)
    let resultado = 0

    for(let i = 0; i < stringEnterin.length; i++){
        console.log(typeof stringEnterin[i])   
        resultado = resultado+ Number(stringEnterin[i]) 
    }

    return resultado
}

console.log(getSuma(numerin))
