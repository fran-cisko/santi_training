const multiplicar = (a,b) =>{  // a = 3, b = 4
    console.log(b)

    let sumando = 0

    for(let i = 0; i<b; i++) {   
       sumando += a
    }
     return sumando    
}

const sumar = (a, b) =>{
    console.log(b)
    let suma = a + b     
    return suma
}

console.log('hola')
let f = 14

console.log(
    multiplicar(
        sumar(2, 6),
        sumar(multiplicar(3, 7),f)
    )
)

// hola
// 6
// 7
// 14
// 35
//
//
//
//
//
//

