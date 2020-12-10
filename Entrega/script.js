const readline = require('readline-sync')
const notaSemestre1 = readline.question('Qual foi a sua nota no primeiro semestre?')
const notaSemestre2 = readline.question('Qual foi sua nota no segundo semestre?', { encoding: 'utf8' })
const notaSemestre3 = readline.question('Qual foi sua nota no terceiro semestre?')
const notaSemestre4 = readline.question('Qual foi sua nota no quarto semestre?')
const notaSemestre5 = readline.question('Qual foi sua nota no quinto semestre?')
const media = (parseFloat(notaSemestre1) + parseFloat(notaSemestre2) + parseFloat(notaSemestre3) + parseFloat(notaSemestre4) + parseFloat(notaSemestre5)) / 5

const mediaFinal = media.toFixed(2)

console.log(`Sua nota é ${mediaFinal}!`)

if (mediaFinal >= 7) {
    console.log('Parabéns, você arrasou! Aprovado!')
} else if (mediaFinal < 5) {
    console.log('Lamento, você não obteve nota suficiente. Reprovado.')
} else {
    console.log('Você precisa estudar mais, está de recuperação.')
}