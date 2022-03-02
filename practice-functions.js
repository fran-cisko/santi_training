let chat = function ( name, massage, isScream){
    let fullMassage = console.log( `el usuario ${name} dice: ${massage}`)
    if (isScream){
        fullMassage = fullMassage.toUpperCase()
    }
    return fullMassage
}

chat ( "Pedro", "que lindo está el día")
chat ("Rigoberta", "para vos será lindo", true)
