//-Crear una función que reciba un array de "personas" siendo "persona" un tipo de objeto que 
//contiene los campos "nombre", "apellido" y "edad". La función tiene que devolver un array con sólo los nombres
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
        name : "La Mona",
        lastName : "Giménez",
        age : 80
    },
    
]
let namesOfPersons = function(persons){
    let names =[]
    for(let i = 0 ; i< persons.length; i++){
        names.push(persons[i].name)
    }
    return names
}

console.log(namesOfPersons(people))