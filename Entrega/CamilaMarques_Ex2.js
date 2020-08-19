/*
Receber = 5 notas 

Desenvolvimento = calcular a média 

Saída = Dizer se a aluna foi aprovada, reprovada ou ficou de recuperação

*/

//readline-sync serve para fazer perguntas ao usuário e conseguir trabalhar com as respostas

//parseFloat serve para ter valores númericos ao inv´s de string

const readline = require("readline-sync")

const notaUm = parseFloat(readline.question('Qual sua primeira nota?'))

const notaDois = parseFloat(readline.question('Qual sua segunda nota?'))

const notaTres = parseFloat(readline.question('Qual sua terceira nota?'))

const notaQuatro = parseFloat(readline.question('Qual sua quarta nota?'))

const notaCinco = parseFloat(readline.question('Qual sua quinta nota?'))

const soma = notaUm+notaDois+notaTres+notaQuatro+notaCinco 

const mediaFinal = (soma)/5

//toFixed serve para mostrar duas casas decimais depois da vírgula
if(mediaFinal >= 7){
    console.log('Você foi aprovada! Sua média foi '+ mediaFinal.toFixed(2)) // concatenação de palavras 
}else if (5< mediaFinal <7){
    console.log("Você está de recuperação! Sua média foi " + mediaFinal.toFixed(2))
}else{
    console.log("Você foi reprovada! Sua média foi " + mediaFinal.toFixed(2))
}