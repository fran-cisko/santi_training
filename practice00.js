
const dataPerson = {
     colorPelo: "marron",
     weight: 74.5,
     friendsNames: ["Pepe", "Roberto","Yolanda"],
     names: "Fulano",

     saludar: function(){
        console.log(` Hola soy ${this.nombre}.`)
    }
}

dataPerson.saludar();

let {colorPelo, weight,friendsNames,names} = dataPerson;

console.log(colorPelo, weight, friendsNames, names);

let [firstFriendName, secondName, thirdName] = friendsNames;
console.log(firstFriendName,secondName,thirdName);


