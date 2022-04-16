import africa from "./africa.js"
//11.Hacer una función que reciba el array de países de áfrica y devuelva un array con sólo aquellos paises que tienen mas de un idioma oficial

const hasMultiLanguageCountry = (country) => country.official_languages.length > 1


const hasMultiLanguageCountries = (contries) =>{

    return contries.filter(hasMultiLanguageCountry)
}

console.log(hasMultiLanguageCountries(africa))