
/*Crie um programa que vai receber 5 notas, calcular a média e dizer se a aluna foi aprovada, reprovada ou ficou em recuperação.

Regras:

para ser aprovada a média tem que ser maior ou igual 7
para ser reprovada a média tem que ser menor que 5
para ir para recuperação a média tem que ser maior ou igual a 5 e menor que 7
Para receber os valores use o readline-sync

Dica: para ter valores numericos ao inves de string busca sobre parseFloat(string)*/


// Dados de entrada
const readline = require ('readline-sync')
const nome = readline.question('Informe o nome do aluno(a): ') //Declaração e atribuição da constante nome e solicitação de entrada de dados

const nota1 = parseFloat(readline.question('Informe a nota 1: ')) //Declaração e atribuição da constante nota1, solicitação de entrada de dados e conversão da string recebida para number float
const nota2 = parseFloat(readline.question('Informe a nota 2: ')) //Declaração e atribuição da constante nota2, solicitação de entrada de dados e conversão da string recebida para number float
const nota3 = parseFloat(readline.question('Informe a nota 3: ')) //Declaração e atribuição da constante nota3, solicitação de entrada de dados e conversão da string recebida para number float
const nota4 = parseFloat(readline.question('Informe a nota 4: ')) //Declaração e atribuição da constante nota4, solicitação de entrada de dados e conversão da string recebida para number float
const nota4 = parseFloat(readline.question('Informe a nota 5: ')) //Declaração e atribuição da constante nota4, solicitação de entrada de dados e conversão da string recebida para number float


//Processamento - Cálculo da média 
const media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;


// Condicional para verificação da média, tratativa de exceção e saída de dados com resultado
if(nota1 > 10 || nota1 < 0 || nota2 > 10 || nota2 < 0 || nota3 > 10 || nota3 < 0 || nota4 > 10 || nota4 < 0)
{
    console.log(`Prezado ${nome}. As notas informadas devem ser de 0 a 10. Por favor reveja os valores.`); //Dados de saída para tratativa de exceção
}else if(media >= 7)
{
    console.log(`Parabéns ${nome}, sua média é: ${media }. Você foi aprovado e pode prosseguir para o próximo nível!`); //Dados de saída, caso a nota esteja acima da média
}else if (media >= 5 && media < 7)
{
    console.log(`Olá ${nome} sua média é: ${media}. Você está de recuparação! Retorne aos estudos e dedique-se mais.`); //Dados de saída, caso a nota esteja abaixo da media
}else
{
    console.log(`Infelizmente ${nome} sua média é: ${media}. Você foi reprovado! Mas persista, você é capaz!`); //Dados de saída, caso a nota esteja abaixo da media
}