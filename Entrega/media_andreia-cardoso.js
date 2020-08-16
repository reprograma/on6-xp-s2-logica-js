/*Calcular a Média - 5 Notas - Verificar se foi aprovada, reprovada ou ficou de recuperação - Utilizar parseFloat()*/

const readline = require('readline-sync')
const nota1 = readline.question("Digite a primeira nota: ")
const nota2 = readline.question("Digite a segunda nota: ")
const nota3 = readline.question("Digite a terceira nota: ")
const nota4 = readline.question("Digite a quarta nota: ")
const nota5 = readline.question("Digite a quinta nota: ")
const media = ((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5))/5).toFixed(1)

if(media >= 7){
    console.log("Aluna foi APROVADA, sua nota foi: " + media)

}else if(media <= 5 ){
    console.log("Aluna foi REPROVADA, sua nota foi: " + media)

}else {   
    console.log("Aluna ficou de RECUPERAÇÃO, sua nota foi: " + media)

}


