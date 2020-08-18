const readlineSync = require('readline-sync');

const notaUm = parseFloat(readlineSync.question('Nota 1: '));
const notaDois = parseFloat(readlineSync.question('Nota 2: '));
const notaTres = parseFloat(readlineSync.question('Nota 3: '));
const notaQuatro = parseFloat(readlineSync.question('Nota 4: '));
const notaCinto = parseFloat(readlineSync.question('Nota 5: '));

const media = (notaUm+notaDois+notaTres+notaQuatro+notaCinto)/5;

console.log("\nMédia: " + media.toFixed(2));

if(media >= 7)
    console.log("__aprovada__");
else if ( media < 5)
    console.log("__reprovada__");
else
    console.log("__recuperação__");