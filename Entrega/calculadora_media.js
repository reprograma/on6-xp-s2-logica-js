// Calculadora Média
// Crie um programa que vai receber 5 notas, calcular a média e dizer se a aluna foi aprovada, reprovada ou ficou em recuperação.

// Regras:

// para ser aprovada a média tem que ser maior ou igual 7
// para ser reprovada a média tem que ser menor que 5
// para ir para recuperação a média tem que ser maior ou igual a 5 e menor que 7
// Para receber os valores use o readline-sync

const readline = require('readline-sync')
const nota1 = parseFloat(readline.question("Nota da AV1 "))
const nota2 = parseFloat(readline.question("Nota da AV2 "))
const nota3 = parseFloat(readline.question("Nota da AV3 "))
const nota4 = parseFloat(readline.question("Nota da AV4 "))
const nota5 = parseFloat(readline.question("Nota da AV5 "))


console.log(nota1, nota2, nota3, nota4, nota5)


const media = (nota1 + nota2 + nota3 + nota4 + nota5)/5 
console.log("Sua média foi " + media.toFixed(1))

if (media >= "7" ){
    console.log("Parabéns você foi aprovada! =) ")
}else if (media >= "5" ){
    console.log("Estude mais, você ficou em recuperação! =/ ")
}else{
    console.log("Que pena, você foi reprovado! =( ")
}