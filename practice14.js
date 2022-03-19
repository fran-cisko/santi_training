//funcion que recibe nùmero yh devuelve un array con cada uno de los digitos de ese nùmero.

let unNumero= 3545

const getDigitos = (number) =>{
   
    let snumber = String(number)

    let digitos = Array.from(snumber)


    let numDigitos=[]

    for(let i=0; i < digitos.length; i++){
      
        numDigitos.push(Number(digitos[i]))
    }


    return numDigitos
}

console.log(getDigitos(unNumero))