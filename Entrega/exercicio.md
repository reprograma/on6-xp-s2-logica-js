

# Exercício da Semana

## Calculadora Média

Crie um programa que vai receber 5 notas, calcular a média e dizer se a aluna foi aprovada, reprovada ou ficou em recuperação.

Regras:
* para ser __aprovada__ a média tem que ser maior ou igual 7
* para ser __reprovada__ a média tem que ser menor que 5
* para ir para __recuperação__ a média tem que ser maior ou igual a 5 e menor que 7

Para receber os valores use o `readline-sync`

> Dica: para ter valores numericos ao inves de string busca sobre *parseFloat(string)*


// exercício naiara-lima (fiquei na dúvida e coloquei aqui tbm)

const readline = require('readline-sync')

const notaUm = readline.question("Qual foi a sua nota em matemática?")
const notaDois = readline.question("Qual foi a sua nota em português?")
const notaTres = readline.question("Qual foi a sua nota em biologia?")
const notaQuatro = readline.question("Qual foi a sua nota em geografia?")
const notaCinco = readline.question("Qual foi a sua nota em inglês?")

const media = (parseFloat(notaUm) + parseFloat(notaDois) + parseFloat(notaTres) + parseFloat(notaQuatro) + parseFloat(notaCinco)) / 5


console.log("Sua nota é " + media)

if(media >=7){
    console.log("Você foi aprovado!")
}else if(media < 5){
    console.log("Sinto muito, você foi reprovado!")
}else{
    console.log("Você ficou de recuperação.")
}

