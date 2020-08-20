const readline = require('readline-sync')
const nota1 = parseFloat(readline.question('Digite a primeira nota? '))
const nota2 = parseFloat(readline.question('Digite a segunda nota? '))
const nota3 = parseFloat(readline.question('Digite a terceira nota? '))
const nota4 = parseFloat(readline.question('Digite a quarta nota? '))
const nota5 = parseFloat(readline.question('Digite a quinta nota? '))

let media = parseFloat([(nota1+nota2+nota3+nota4+nota5)/5]).toFixed(2)


console.log (`A media do alunx foi ${media}`)

if (media >= 7)
{
    console.log(`A média é ${media},  APROVADO`)
}else if (media < 5 ){
    console.log(`A média é ${media},  REPROVADO`)
}else { console.log (`A média é ${media}, RECUPERAÇÃO`)}

