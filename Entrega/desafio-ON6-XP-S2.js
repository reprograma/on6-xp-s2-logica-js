const readline = require ('readline-sync')

const nota1 = parseFloat(readline.question("Qual a nota da prova 1? "))

const nota2 = parseFloat(readline.question("Qual a nota da prova 2? "))

const nota3 = parseFloat(readline.question("Qual a nota da prova 3? "))

const nota4 = parseFloat(readline.question("Qual a nota da prova 4? "))

const nota5 = parseFloat(readline.question("Qual a nota da prova 5? "))


const media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5


if (media >= 7) {
   console.log(`Sua média é ${media} você está Aprovada`)
} else if (media > 5 && media <= 7 ) {
  console.log (`Sua média é ${media} você está em Recuperação`)
} else {
   console.log(`Sua média é ${media} você está Reprovada`)
}