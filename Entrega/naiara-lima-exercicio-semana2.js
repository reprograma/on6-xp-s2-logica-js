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
