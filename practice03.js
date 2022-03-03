import primo from './practice02.js';

// array.push(elemento)
let primos = []
let noPrimos = []

for(let i=2; i<=55; i++){
    if(primo(i)==true){
        primos.push(i)
    } else{
        noPrimos.push(i)
    }
}
console.log(primos)
console.log(noPrimos)
