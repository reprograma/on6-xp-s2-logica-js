/*
João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. 
João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso. 
Se houver, gravar na variável excesso e na variável multa o valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO.
*/

const readline = require('readline-sync')

const pesoPeixes = parseFloat(readline.question('Qual foi o peso dos peixes? ', {
    encoding: 'utf8',
    keepWhitespace: true}))

if (pesoPeixes > 50){
    const excesso = pesoPeixes - 50
    const multa = excesso * 4
    console.log(`Você pagará uma multa de R$${multa} por conta do excesso de ${excesso} quilos.`)
} else {
    console.log(`Você não pagará multa! O peso foi de ${pesoPeixes} quilos.`)
}

