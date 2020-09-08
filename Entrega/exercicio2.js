const readline = require('readline-sync')

const nota1 = readline.question("Qual a sua nota 1 ? ")
const nota2 = readline.question("Qual a sua nota 2 ? ")
const nota3 = readline.question("Qual a sua nota 3 ? ")
const nota4 = readline.question("Qual a sua nota 4 ? ")
const nota5 = readline.question("Qual a sua nota 5 ? ")

const media = (parseFloat(nota1)) + (parseFloat(nota2)) + (parseFloat(nota3)) + (parseFloat(nota4)) + (parseFloat(nota5))/5

const mediaFinal = media.toFixed(2)

console.log(`Sua media final é: ${mediaFinal}!`)

if(mediaFinal >= 7){

    console.log("Aprovado")

}else if(mediaFinal < 5){

    console.log("Reprovado")

}else if(media >=5 && media < 7){

    console.log("Recuperação")
}

