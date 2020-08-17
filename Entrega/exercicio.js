var readlineSync = require('readline-sync');

const nota1 = parseFloat(readlineSync.question('Informe a primeira nota? '));
const nota2 = parseFloat(readlineSync.question('Informe a segunda nota? '));
const nota3 = parseFloat(readlineSync.question('Informe a terceira nota? '));
const nota4 = parseFloat(readlineSync.question('Informe a quarta nota? '));
const nota5 = parseFloat(readlineSync.question('Informe a quinta  nota? '));
const resultado = ((nota1 + nota2 + nota3 +nota4 + nota5)/5).toFixed(2)


if (resultado >= 7){
    console.log (" Sua média foi: "+ resultado +" , Parabéns, você foi aprovada")

} else if(resultado < 5){
    console.log(" Sua média foi: "+ resultado +" ,Infelizmente vocÊ foi reprovada ")
}else{
    console.log(" Sua média foi: "+ resultado +" , Estude para a prova de recuperação")

}