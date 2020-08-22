const readline = require("readline-sync")

const nota1 = readline.question("Qual foi sua nota no primeiro semestre? ")
const nota2 = readline.question("Qual foi sua nota no segundo semestre? ")
const nota3 = readline.question("Qual foi sua nota no terceiro semestre? ")
const nota4 = readline.question("Qual foi sua nota no quarto semestre? ")
const nota5 = readline.question("Qual foi sua nota no quinto semestre? ")
const total = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5))

const media = total.toFixed(2) / 5
console.log(`Sua média é ${media} !`)


if (media >=7){
  console.log("Parabéns, você está aprovado!!")
} else if(media <5){
  console.log("Sinto muito, você está reprovado!")
} else {
  console.log("Continue estudando, você está de recuperação!")
}