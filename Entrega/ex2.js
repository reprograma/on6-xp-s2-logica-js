const readline = require('readline-sync')


const n1 = readline.question('Qual foi sua primeira nota? ')
const n2 = readline.question('Qual foi sua segunda nota? ')
const n3 = readline.question('Qual foi sua terceira nota? ')
const n4 = readline.question('Qual foi sua quarta nota? ')
const n5 = readline.question('Qual foi sua quinta nota? ')

const notaFinal = ((parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5)) / 5).toFixed(2)

if (notaFinal >= 7){
    console.log(`Você foi aprovada! Sua média final é de ${notaFinal}.`)
} else if (notaFinal >= 5 && notaFinal < 7){
    console.log(`Ainda dá para recuperar, boa sorte na recuperação! Sua média final é de ${notaFinal}.`)
} else {
    console.log(`Você foi reprovada :(! Tente novamente. Sua média final é de ${notaFinal}.`)
}