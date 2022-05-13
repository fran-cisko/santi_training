// let x = 4
// let y = 7
 const sumar = (a, b) =>{
    let suma = a + b     
    return suma
}




const multiplicar = (a,b) =>{  // a = 3, b = 4
    let sumando = 0

    for(let i = 0; i<b; i++) {   
        //sumando += a // sumando = sumando + a
       sumando = sumar(sumando,a)
        console.log(sumando)
    }
     return sumando    
}

console.log(multiplicar(3,8))
//6
//