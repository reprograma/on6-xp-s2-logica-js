const readline = require('readline-sync')

const nota1 = parseInt(readline.question("Qual foi a sua primeira nota? "))
const nota2 = parseInt(readline.question("Qual foi a sua segunda nota? "))
const nota3 = parseInt(readline.question("Qual foi a sua terceira nota? "))
const nota4 = parseInt(readline.question("Qual foi a sua quarta nota? "))
const nota5 = parseInt(readline.question("Qual foi a sua quinta nota? "))

const media = (nota1 + nota2 + nota3 + nota4 + nota5)/5
console.log(nota1, note2, nota3, nota4, nota5, media)