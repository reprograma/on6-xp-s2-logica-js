const readline = require('readline-sync')

const nota1 = parseInt(readline.question("Qual foi a sua primeira nota? "))
const nota2 = parseInt(readline.question("Qual foi a sua segunda nota? "))
const nota3 = parseInt(readline.question("Qual foi a sua terceira nota? "))
const nota4 = parseInt(readline.question("Qual foi a sua quarta nota? "))
const nota5 = parseInt(readline.question("Qual foi a sua quinta nota? "))

const media = (nota1 + nota2 + nota3 + nota4 + nota5)/5
console.log(nota1, nota2, nota3, nota4, nota5, media)

if (media >= 7){
    console.log("Sua média foi " + media + ". Parabéns, você foi aprovado")
}else if (media < 5){
    console.log("Sua média foi " + media + ". Estudando mais um pouquinho conseguiremos, mas no momento infelizmente você está reprovade.")
}else{
    console.log("Sua média foi " + media + ". Ainda não fomos aprovado, mas ainda há uma chance. Vamos de recuperação!")
}