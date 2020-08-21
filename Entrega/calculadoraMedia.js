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

if(media >= 7){
    console.log(`Parabéns, ${nomeAluno}! Você está aprovada(o) em ${nomeDisciplina}`)

}else if (media < 5) {
    console.log(`Cara (o) ${nomeAluno} , infelizmente sua média foi ${media.toFixed(2)} e você está reprovado em ${nomeDisciplina}`)

}else{
    console.log(`${nomeAluno}, sua média em  ${nomeDisciplina}  foi ${media.toFixed(2)}, e você tem uma nova oportunidade através da Recuperação.`)
}