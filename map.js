// el mètodo map recibe como argumento una funciòn

let people = [
    {
        age : 25,
        name: "Roberto"
    },
    {
        age : 21,
        name: "Pepa"
    },
    {
        age : 37,
        name: "Cristiàn"
    }
]

let getAge = (person) =>{
    return person.age
}

console.log(people.map(getAge))

