/**
 * O programa calcula a média das 5 notas recebidas, e após o cálculo informa se a aluna foi aprovada, 
 * reprovada ou ficou em recuperação.
 * 
 * @title Calcula média das notas
 * @author Lílian Teixeira - <lilianhteixeira@gmail.com>
 */

// readline-sync pega inputs(entradas) do terminal
const input = require('readline-sync');

console.log("Bem vinda à calculadora de média.");
console.log("-----------------------------------");
console.log("Informe as 5 notas, uma após a outra. Confirme o envio da nota apertando enter.");
console.log("Use ponto caso queira informar um valor com casa decimal, exemplo 7.5.");
console.log("-----------------------------------")

const nota1 = input.question("Insira a primeira nota: ", {hideEchoBack: true});
const nota2 = input.question("Insira a segunda nota: ", {hideEchoBack: true});
const nota3 = input.question("Insira a terceira nota: ", {hideEchoBack: true});
const nota4 = input.question("Insira a quarta nota: ", {hideEchoBack: true});
const nota5 = input.question("Insira a quinta nota: ", {hideEchoBack: true});

const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5))/5;

console.log("As notas informadas foram: " + nota1 + ", " + nota2 + ", " + nota3 + ", " + nota4 + " e " + nota5);
console.log("A média da aluna é: " + media.toFixed(2));

if(media >= 7){
    console.log("Parabéns, você foi aprovada.")
}else if(media <= 5){
    console.log("Infelizmente você foi reprovada.")
}else{
    console.log("Você está de recuperação, estude um pouco mais para ser aprovada.")
}


