//11.Hacer una función que reciba el array de países de áfrica y devuelva la cantidad total de habitantes de países que tienen el francés como idioma oficial.
import africa from "./africa.js"
import getCountriesFrenchOfficialLanguage from "./practice26_array.js"

const getPopulationCountry = (country) => country.population

const getTotalCountriesFrenchOfficialLanguage = (countries) => 
countries
.filter(getCountriesFrenchOfficialLanguage)//! esto no nunciona error: Uncaught TypeError: countries.filter is not a function
.filter(isFrenchOfficialLanguage)
.map(getPopulationCountry)


console.log(getTotalCountriesFrenchOfficialLanguage(africa))