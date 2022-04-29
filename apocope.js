// hacer un generador de apocope(4 letras) de un nombre que se pide ingresar
//procedimiento principal
function saludarConNombreCorto(){
    let nombre = prompt("ingrese su nombre")
    if(nombre.length > 4){
     saludarConApocope(nombre)
    }
    else{
       saludo_si_nombre_corto
    }

}

//Saludo cuando el nombre ingresado tiene hasta cuatro letras.
function saludo_si_nombre_corto(nombre_corto){
    console.log(`Hola, ${nombre_corto}`)
}


//Saculudo cuando el nombre ingresado tiene más de 4 letras
function saludarConApocope(nombre_largo){
    //generador de apocope
let apocope = nombre_largo.substring(0,4)
    console.log(`Hola, ${nombre_largo}. Te llamare ${apocope}`)
}

saludarConNombreCorto()

