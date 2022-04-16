import africa from "./africa.js"
//11.Hacer una función que reciba el array de países de áfrica y devuelva un array con que contenga objetos con sólo el nombre y población de cada país


const getNameAndPopulationOfCountry = (country) =>{
    return {
        name : country.name,
        population : country.population
    }
}

const getNameAndPopulationOfCountries = (countries)=> countries.map(getNameAndPopulationOfCountry)

console.log(getNameAndPopulationOfCountries(africa))