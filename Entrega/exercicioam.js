const entrada = require('readline-sync')

console.log("Olá estudante :)")
const notaum = parseFloat(entrada.question("digite a sua primeira nota: "))
const notadois = parseFloat(entrada.question("digite a sua segunda nota: "))
const notatres = parseFloat(entrada.question("digite a sua terceira nota: "))
const notaquatro = parseFloat(entrada.question("digite a sua quarta nota: "))
const notacinco = parseFloat(entrada.question("digite a sua quinta nota: "))


const media = (notaum + notadois + notatres + notaquatro + notacinco)/5

if (media >= 7) {
    console.log("Você aprovou!")
} else if (media < 5) {
    console.log("Você reprovou!")
} else {
    console.log("Você está em recuperação!")}

//console.log(“aprovado!)
