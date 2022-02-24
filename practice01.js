
//let  = process.argv[2]
let div;
for(let number= 3; number<55; number++){

    let entro = false
    for (let i=2; i< number;i++){
        div=i;
        if(number%div==0){
            entro = true;
        }
    }

    if (entro==true){
        console.log(`${number} no es primo`)
    }else{console.log(`${number} es primo`)}

}


// hacer funciòn que devuelva true o false en caso de que sea primo o no.

