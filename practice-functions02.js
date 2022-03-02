//parámetros nombrados. Permite que la función siga funcionando auque falten parámetros al llamarla.

// function createGodzilla( weight, height, color = 'green', powers)

const createGodzilla = function ({weight='un montón', height= 'muchos', color = 'green', powers='mejor no saberlo'}){
    console.log(`Godzilla ${color} pesa ${weight}kg, tiene una altura de ${height} metros y los poderes de ${powers}`)
}

// createGodzilla({
//     weight:200, 
//     color: 'blue'} )
const godzillaGreenParams = {
    weight:2000,
    height: 25,
    powers:[' fuego por la boca', ' aguantar bajo el agua mucho tiempo', ' mirada tierna']
}

let godzillaBlueParams = {
    weight: 2500,
    color: 'blue',
    powers: [' tirar rayos lazer por los ojos', ' coletazo turbo destructor', ' dormir siestas cortas reparadoras']
}

createGodzilla(godzillaBlueParams)