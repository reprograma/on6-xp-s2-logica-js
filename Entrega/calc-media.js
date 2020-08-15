const input = require("readline-sync");

const alune = readline.question("Digite seu nome: ")
const nota1 = parseFloat(readline.question("Digite a 1ª nota: "))
const nota2 = parseFloat(readline.question("Digite a 2ª nota: "))
const nota3 = parseFloat(readline.question("Digite a 3ª nota: "))
const nota4 = parseFloat(readline.question("Digite a 4ª nota: "))
const nota5 = parseFloat(readline.question("Digite a 5ª nota: "))
const media = (nota1+nota2+nota3+nota5)/5

if (media >= 7) {
    console.log(`${alune}, sua média é: ${media}. Parabéns! Você está aprovade!`)
}else if (media >= 5 && media < 7) {
    console.log(`${alune}, sua média é: ${media}. Você está de recuperação.`)
}else {
    console.log(`${alune}, sua média é: ${media}. Você está reprovade.`)
}