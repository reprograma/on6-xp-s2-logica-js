//Crie um programa que vai receber 5 notas,
// calcular a média e dizer se a aluna foi aprovada, reprovada ou ficou em recuperação.

//Regras:
//* para ser _aprovada_ a média tem que ser maior ou igual 7
//* para ser _reprovada_ a média tem que ser menor que 5
//* para ir para _recuperação_ a média tem que ser maior ou igual a 5 e menor que 7


const readline = require('readline-sync');

const n1 =  parseFloat(readline.question ("Digite a primeira nota: "))
console.log(`A primeira nota é: ${n1}`)

const n2 = parseFloat(readline.question ("Digite a segunda nota: "))
console.log(`A segunda nota é: ${n2}`)

const n3 = parseFloat (readline.question ("Digite a terceira nota: "))
console.log(`A terceira nota é: ${n3}`)

const n4 = parseFloat(readline.question("Digite a quarta nota: "))
console.log(`A quarta nota é: ${n4}`)

const n5 = parseFloat(readline.question("Digite a quinta nota: "))
console.log(`A quinta nota é: ${n5}`)

console.log("----------------------------------")

const media = (n1 + n2 + n3 + n4 + n5) / 5
console.log(`A média da aluna é: ${media.toFixed(2)}`)

if (media>=7){
    console.log("Aluna Aprovada!")
} else if (media <5){
    console.log("Aluna Reprovada!")
} else {
    console.log("Aluna em recuperação")
}