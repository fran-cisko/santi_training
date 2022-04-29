//11.Hacer una función que reciba el array de países de áfrica y devuelva la cantidad total de habitantes de países que tienen el francés como idioma oficial.
import africa from "./africa.js"
import isFrenchOfficialLanguage from "./practice26_array.js"

const getPopulationCountry = (country) => country.population

const getTotalCountriesFrenchOfficialLanguage = (countries) => {
let gente = 0
let paises = countries
.filter(isFrenchOfficialLanguage)
.map(getPopulationCountry)
console.log(paises)
for (let people of paises){
    gente += people
    console.log(gente)
}
return gente
}

console.log(getTotalCountriesFrenchOfficialLanguage(africa))