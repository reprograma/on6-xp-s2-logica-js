const readline = require('readline-sync')

const nota1 = parseFloat(readline.question("Qual a primeira nota? "))
const nota2 = parseFloat(readline.question("Qual a segunda nota? "))
const nota3 = parseFloat(readline.question("Qual a terceira nota? "))
const nota4 = parseFloat(readline.question("Qual a quarta nota? "))
const nota5 = parseFloat(readline.question("Qual a quinta nota? "))

const media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5
console.log(`A sua média é: ${media}`)

if (media >= 5 && media < 7) {
    console.log("Você ficou de recuperação")
} else if (media >= 7) {
    console.log("Parabéns, você está aprovadx!!!") 
}else{
    console.log("Você foi reprovadx :(")
} 



