/*Crie um programa que vai receber 5 notas, calcular a média e dizer se a aluna foi aprovada, reprovada ou ficou em recuperação.

Regras:
* para ser __aprovada__ a média tem que ser maior ou igual 7
* para ser __reprovada__ a média tem que ser menor que 5
* para ir para __recuperação__ a média tem que ser maior ou igual a 5 e menor que 7

Para receber os valores use o `readline-sync`

> Dica: para ter valores numericos ao inves de string busca sobre *parseFloat(string)*
*/

console.log("Hello Student!")

const readline = require('readline-sync')

const notaEscolar1 = parseFloat(readline.question("Qual sua nota do 1 Bimestre?")) //não coloquei o simbolo ° porque estava indo com caracter diferente.
const notaEscolar2 = parseFloat(readline.question("Qual sua nota do 2 Bimestre?"))
const notaEscolar3 = parseFloat(readline.question("Qual sua nota do 3 Bimestre?"))
const notaEscolar4 = parseFloat(readline.question("Qual sua nota do 4 Bimestre?"))
const notaEscolar5 = parseFloat(readline.question("Qual sua nota do 5 Bimestre?"))

const soma = notaEscolar1 + notaEscolar2 + notaEscolar3 + notaEscolar4 + notaEscolar5
const mediaEscolar = soma / 5
const resultado = mediaEscolar.toFixed(2)


if(resultado >= 5 && resultado < 7){
    console.log(`Sinto muito! Sua nota foi ${resultado}. Você esta de Recuração.`)
}else if(resultado < 5){
    console.log(`Sinto muito! Sua nota foi ${resultado}. Você esta Reprovado`)
}else{
    console.log(`Parabéns! Sua nota foi ${resultado}. Você esta Aprovado!`)
}

