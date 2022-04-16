import africa from "./africa.js"

//11.Hacer una función que reciba el array de países de áfrica y devuelva un array con sólo aquellos paises que tienen un área mayor a 1.000.000 de km2


const isBigAreaCountry = (country) => country.area > 1000000



const getBigAfricanCountries = (countries) => countries.filter(isBigAreaCountry)


console.log(getBigAfricanCountries(africa))