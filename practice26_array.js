//11.Hacer una función que reciba el array de países de áfrica y devuelva el nombre de todos los países que tienen el francés como idioma oficial(include)
import africa from "./africa.js"

const isFrenchOfficialLanguage = (country) => country.official_languages.includes("French")

const getCountryName = (country) => country.name

const getCountriesFrenchOfficialLanguage = (countries)=> countries
    .filter(isFrenchOfficialLanguage)
    .map(getCountryName)


//console.log(getCountriesFrenchOfficialLanguage(africa))

export default isFrenchOfficialLanguage