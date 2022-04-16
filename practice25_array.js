import africa from "./africa.js"
//11.Hacer una función que reciba el array de países de áfrica y devuelva los nombres de aquellos que tienen menos de 20.000.000 de habitantes

const getLitlePopulationCountry = (country) => country.population < 20000000

const getCountryName = (country) => country.name

const getLitlePopulationCountries = (countries)=> countries
    .filter(getLitlePopulationCountry)
    .map(getCountryName)


console.log(getLitlePopulationCountries(africa))
