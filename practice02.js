
let isDivisible = function(dividendo, divisor){
    let resultado = false

    if(dividendo % divisor == 0){
        resultado = true
    }
    return resultado
}

let primo = function(number){
    let resultado= true;
    for (let i=2; i<number;i++){
       
        if(isDivisible(number, i)){
            resultado=false
        }
        
    }

    return resultado;
}

/*
for(let i=2;i<=25;i++){
    let isPrime = primo(i)

    isPrime
        ? console.log("el nùmero "+i+" SI es primo.")
        : console.log("el nùmero "+i+" NO es primo.")
}
*/

export default primo