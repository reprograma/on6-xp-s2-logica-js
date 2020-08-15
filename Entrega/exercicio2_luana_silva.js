const readline = require('readline-sync');

console.log("Calculadora de média");

const nome_aluna = readline.question("Nome da aluna: ");
console.log("Agora digite as notas da aluna.")
const nota1 = parseFloat(readline.question("Nota 1: "));
const nota2 = parseFloat(readline.question("Nota 2: "));
const nota3 = parseFloat(readline.question("Nota 3: "));
const nota4 = parseFloat(readline.question("Nota 4: "));
const nota5 = parseFloat(readline.question("Nota 5: "));

const media = (nota1 + nota2 + nota3 + nota4 + nota5)/5;

if((media >= 7) && (media <= 10)){
    console.log(`A aluna ${nome_aluna} foi aprovada.`);
} else if((media < 7) && (media >= 5)){
    console.log(`A aluna ${nome_aluna} ficou de recuperação.`);
} else if((media < 5) && (media >= 0)){
    console.log(`A aluna ${nome_aluna} foi reprovada.`);
} else{
    console.log("Algumas notas digitadas podem não estar com valores entre 0 e 10. Confira e tente novamente.");
}