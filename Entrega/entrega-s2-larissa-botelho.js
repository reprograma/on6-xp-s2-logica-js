const readline = require("readline-sync")

const nota1 = readline.question("Oi! Qual é a nota da sua primeira prova? \n")
const nota2 = readline.question("Agora insira sua nota da segunda prova. \n")
const nota3 = readline.question("Insira a nota da sua terceira prova. \n")
const nota4 = readline.question("Qual a nota quarta prova? \n")
const nota5 = readline.question("E por fim, qual a nota da quinta prova? \n")

// armazena a soma das notas inseridas
const somanotas = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5)

// armazena a media das notas inseridas
const medianotas = somanotas / 5

// imprime status da aluna
if (medianotas >= 7) {
    console.log("Parabéns, você foi aprovada!!!")
} else if (medianotas < 5) {
    console.log("Que pena, você foi reprovada.")
} else {
    console.log("Você não foi aprovada mas pode fazer uma recuperação.")
}