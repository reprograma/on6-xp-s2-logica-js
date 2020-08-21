/*# Exercício da Semana
## Calculadora Média
Crie um programa que vai receber 5 notas, calcular a média e dizer se a aluna foi aprovada, reprovada ou ficou em recuperação.
Regras:
* para ser __aprovada__ a média tem que ser maior ou igual 7
* para ser __reprovada__ a média tem que ser menor que 5
* para ir para __recuperação__ a média tem que ser maior ou igual a 5 e menor que 7

Para receber os valores use o `readline-sync`
Para receber os valores use o `readline-sync`

> Dica: para ter valores numericos ao inves de string busca sobre *parseFloat(string)*
*/

const readline = require('readline-sync')

const nota1 = parseFloat(readline.question("Qual foi a sua primeira nota?"))
const nota2 = parseFloat(readline.question("Qual foi a sua segunda nota?"))
const nota3 = parseFloat(readline.question("Qual foi a sua terceira nota?"))
const nota4 = parseFloat(readline.question("Qual foi a sua quarta nota?"))
const nota5 = parseFloat(readline.question("Qual foi a sua quinta nota?"))

const media = parseFloat((nota1 + nota2 + nota3 + nota4 + nota5) / 5)
const mediaFinal = media.toFixed(2)

console.log(`Sua nota Final é ${mediaFinal}!`)

if(mediaFinal >= 7 && mediaFinal <= 10){
    console.log("Sucesso!! você foi aprovado!!")

}else if(mediaFinal < 5){
    console.log("Que pena não foi dessa vez, reprovado!")

}else if(mediaFinal >= 5 && mediaFinal < 7){
    console.log("Você tem uma segunda chance, você esta de recuperação. Estude mais um pouco")    
    
}else{
    console.log("Não foi possivel calcular sua media.")

}
    

