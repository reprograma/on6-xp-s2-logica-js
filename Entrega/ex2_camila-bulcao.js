const readline = require('readline-sync')

const nota1 = readline.question("Qual eh a sua primeira nota?")
const nota2 = readline.question("Qual eh sua segunda nota?")
const nota3 = readline.question("Qual eh sua terceira nota?")
const nota4 = readline.question("Qual eh sua quarta nota?")
const nota5 = readline.question("Qual eh sua quinta nota?")

const media = ((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5))/5)

const mediafinal = media.toFixed(2)

console.log("Sua media eh:" + mediafinal)

if(mediafinal>= 7){
    console.log("Parabéns!! Você foi aprovado ;)")
}else if(mediafinal<5){
    console.log("Não foi dessa vez! Você está reprovado :(")

} else{
    console.log("Hora de tentar recuperar o resultado!Você está de recuperação")
}