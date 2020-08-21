const readline = require('readline-sync')
const nomeAluno = readline.question("Nome do Aluno: ")


const primeiraNota = parseFloat(readline.question("Primeira Unidade: "))
const segundaaNota = parseFloat(readline.question("Segunda Unidade: "))
const terceiraNota = parseFloat(readline.question("Terceira Unidade: "))
const quartaNota = parseFloat(readline.question("Quarta Unidade: "))
const quintaNota = parseFloat(readline.question("Quinta Unidade: "))

const media = (primeiraNota + segundaaNota + terceiraNota + quartaNota + quintaNota) / 5
console.log("Resultado da Media : " + media)

//
if(media >= 7){
    console.log("Aprovadx!!!  " + nomeAluno + "  o/ ")

}else if(media < 5 ){
   console.log("Reprovadx!!! " + nomeAluno + "  :( ")

}else if(media >= 5 ){
    console.log("Recuperação!! Estude.  " + nomeAluno + "  ;) ")

}else if(media < 7 ){
    console.log("Recuperação!! Estude.  " + nomeAluno + "  ;) ")

}else{
    console.log("Aconteceu algo errado!" + nomeAluno)
}
//
