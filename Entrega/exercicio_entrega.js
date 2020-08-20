//parseFloat(readline) tentar dentro da question

const readline1 = require('readline-sync')
const nota1 = parseFloat(readline1.question("digite a sua primeira nota: "))

const readline2 = require('readline-sync')
const nota2 = parseFloat(readline1.question("digite a sua segunda nota: "))


const readline3 = require('readline-sync')
const nota3 = parseFloat(readline1.question("digite a sua terceira nota: "))

const readline4 = require('readline-sync')
const nota4 = parseFloat(readline1.question("digite a sua quarta nota: "))

const readline5 = require('readline-sync')
const nota5 = parseFloat(readline1.question("digite a sua quinta nota: "))

const soma = nota1 + nota2 + nota3 + nota4 + nota5

const media = soma/5

console.log("===============================================================")

if(media >= 7) {
    console.log(`Sua média foi de ${media} pontos. Você foi APROVADA!`)
}else if( media >= 5 && media <= 7) {
    console.log(`Sua média foi de ${media} pontos. Você está de RECUPERAÇÃO!`)
}else if(media < 5) {
    console.log(`Sua média foi de ${media} pontos. Você foi REPROVADA!`)
}
console.log("===============================================================")