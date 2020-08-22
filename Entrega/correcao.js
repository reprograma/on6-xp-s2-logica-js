const readline = require('readline-sync')

const nota1 = parseFloat(readline.question("Qual a sua nota de Geografia? "))
const nota2 = parseFloat(readline.question("Qual a sua nota de Matemática? "))
const nota3 = parseFloat(readline.question("Qual a sua nota de Portugues? "))
const nota4 = parseFloat(readline.question("Qual a sua nota de História? "))
const nota5 = parseFloat(readline.question("Qual a sua nota de Física? "))

const media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5
console.log(`A sua média é: ${media}`)

if (media >= 7) {
  console.log("Parabéns, você está aprovadx!!!") 
} else if (media >= 5 && media < 7) {
  console.log("Você ficou de recuperação")
}else{
    console.log("Você está reprovadx :(")
} 
