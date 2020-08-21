/*
Calculadora Média
Crie um programa que vai receber 5 notas, calcular a média e dizer se a aluna foi aprovada, 
reprovada ou ficou em recuperação.

Regras:
para ser aprovada a média tem que ser maior ou igual 7
para ser reprovada a média tem que ser menor que 5
para ir para recuperação a média tem que ser maior ou igual a 5 e menor que 7
Para receber os valores use o readline-sync

Dica: para ter valores numericos ao inves de string busca sobre parseFloat(string)
*/

const readline = require('readline-sync');

const nota1 = readline.question('Qual foi sua nota na Prova I? ');
const nota2 = readline.question('Qual foi sua nota na Prova II? ');
const nota3 = readline.question('Qual foi sua nota de forum? ');
const nota4 = readline.question('Qual foi sua nota de Trabalho? ');
const nota5 = readline.question('Qual foi sua nota na Prova III? ');

const somaNotas = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5)

const media = somaNotas / 5;

const reFinal = media.toFixed(2);

console.log("Essa foi sua média no semestre: "+  media);

if (media >= 7) {
    console.log('Muito bem! Você alcançou média suficiente para aprovação neste semestre. Boas Férias! 0/')

} else if (media < 5){
    console.log('Sinto muito! Média insuficiente para aprovação neste semestre!') 

} else {
   console.log('Opa! Você está de recuperação. Aproveite mais essa chance para atingir aprovação neste semestre!')
}