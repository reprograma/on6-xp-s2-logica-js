// tirar a média de 05 notas, sendo < 7 reprovado; =7 recuperação e >7 aprovado.

const readline = require('readline-sync')

// usar parcefloat

const nota1 = readline.question("Qual sua nota de Matematica?")
const nota2 = readline.question("Qual sua nota de Portugues?")
const nota3 = readline.question("Qual sua nota de Historia?")
const nota4 = readline.question("Qual sua nota de Geografia?")
const nota5 = readline.question("Qual sua nota de Ingles?")

const soma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) 
const media = soma / 5

//para ser aprovada a média tem que ser maior ou igual 7
//para ser reprovada a média tem que ser menor que 5
// para ir para recuperação a média tem que ser maior ou igual a 5 e menor que 7
// usar parcefloat

if( media >= "7"){
    console.log("Parabéns! Você foi aprovada!")
}else if( media < "5"){
    console.log("Que pena! Você ficou reprovada") 
}else if( media >= "5" &&  media < "7" ){
console.log("Você ficou de recuperação!")
}