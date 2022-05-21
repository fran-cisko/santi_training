// 012012012... al màs grande transformarlo al màs chico para que gane el màs grande.
let elementos = {
    1 : "piedra",
    2 : "papel",
    3 : "tijera"
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (true){
    let usuario = Number(prompt("ingrese 1 para piedra, 2 para papel, 3 para tijera: "))

    // para salir del programa
    if(![1,2,3].includes(usuario)){
        break
    }

    let automata = getRandomInt(1,3)


    let u = usuario - 1
    let a = automata -1

    let valor_absoluto_jugadores = Math.abs(u - a)

    let corrimiento =  valor_absoluto_jugadores - 1 

    let resultado = (a+corrimiento)%3 - (u+corrimiento)%3

    if (resultado == 1){
        console.log(`gana el autòmata ${elementos[automata]} sobre ${elementos[usuario]}`)
    }
    else if ( resultado == -1){
        console.log(`gana el usuario ${elementos[usuario]} sobre ${elementos[automata]}`)
    }
    else {console.log("empate")}
}