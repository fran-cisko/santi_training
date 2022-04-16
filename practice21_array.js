
import lePuedoPonerAfrica from "./africa.js"
//11.Hacer una función que reciba el array de países de áfrica y devuelva un array con sólo los nombres de los países


const getCountryName = (country) => {
    return country.name
}

const getCountriesNames = (countries) => countries.map(getCountryName)


console.log(getCountriesNames(lePuedoPonerAfrica))

export default getCountriesNames