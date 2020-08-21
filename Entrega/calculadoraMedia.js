const readlineSync = require('readline-sync');

console.log("Consulte sua média.")

const nomeAluno = (readlineSync.question('Qual seu nome? '));
const nomeDisciplina = (readlineSync.question('Qual a disciplina? ' ));

const instrucao = ("Insira as notas de suas avaliações.");
console.log(instrucao)

const Iava = parseFloat(readlineSync.question('I Avaliação: '));
const IIava = parseFloat(readlineSync.question('II Avaliação: '));
const IIIava = parseFloat(readlineSync.question('III Avaliação: '));
const IVava = parseFloat(readlineSync.question('IV Avaliação: '));
const Vava = parseFloat(readlineSync.question('V Avaliação: '));

const media = (Iava+IIava+IIIava+IVava+Vava)/5;
