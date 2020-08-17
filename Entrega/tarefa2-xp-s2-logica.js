const readline = require('readline-sync')
// atribuição das notas nas variáveis
const n1 = readline.question("Qual a Nota1? ")
const n2 = readline.question("Qual a Nota2? ")
const n3 = readline.question("Qual a Nota3? ")
const n4 = readline.question("Qual a Nota4? ")
const n5 = readline.question("Qual a Nota5? ")

// soma de todas as notas dentro da variável soma e conversão de valores
const soma = parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat(n4)+parseFloat(n5)

// cálculo da média
const media = (soma/5)

// console.log(media) **teste de cáculo

// condições para teste de média
if (media >= 7) {
    console.log("Você foi aprovado com média:", media)
} else if (media >= 5 && media <7){
    console.log("Você foi para recuperação com média:", media)
} else{
    console.log("Infelizmente você ficou reprovado com média:", media)
}
