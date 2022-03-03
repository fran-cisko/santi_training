//-Crear una función que reciba un array de "personas" siendo "persona" un tipo de objeto que contiene los campos "nombre", "apellido" y "edad". 
//La función tiene que devolver un array con todas las personas de menos de 30 años

let people = [
    {
        name : "Álvaro",
        lastName : "Giménez",
        age : 31
    },
    {
        name : "Juana",
        lastName : "Saenz",
        age : 99
    },
    {
        name : "La zorra",
        lastName : "Rodriguez",
        age : 21
    },
    {
        name : "La Mona",
        lastName : "Giménez",
        age : 23
    },
    
]
let namesOfPersons = function(persons){
    let isYoung =[]

    for(let i = 0 ; i< persons.length; i++){

        if(persons[i].age<30){
            isYoung.push(persons[i])
        }
    }

    return isYoung
}

console.log(namesOfPersons(people))