

console.log("Escola Estadual Frontino Guimarães")
console.log("                                           ")
console.log("Calcule sua média informando as notas nos respectivos campos:")
console.log("Obs.: Utilize o ponto (.) para notas quebradas. Ex: 5.5")
console.log("                                           ")

const readline = require ('readline-sync')
const nota1 = readline.question ("Qual sua nota de Matematica?")
console.log("                                           ")
const nota2 = readline.question ("Qual sua nota de Portugues?")
console.log("                                           ")
const nota3 = readline.question ("Qual sua nota de Historia?")
console.log("                                           ")
const nota4 = readline.question ("Qual sua nota de Geografia?")
console.log("                                           ")
const nota5 = readline.question ("Qual sua nota de Biologia?")

/*
const nota1= 10
const nota2= 9
const nota3=0
const nota4= 7
const nota5= 9*/

const totalNotas= parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5)
const mediaNotas= totalNotas /5
console.log(mediaNotas)

/*if(mediaNotas <5){
    console.log( "Sua nota foi: " + mediaNotas + ". Você foi REPROVADA!")

}else if (mediaNotas >=7){
    console.log( "Sua nota foi: " + mediaNotas + ". Você foi APROVADA! ")

}else if(mediaNotas >=5 || mediaNotas <=7){
    console.log( "Sua nota foi: " + mediaNotas + ". Você está de RECUPERAÇÃO!")
}else{}*/

if(mediaNotas <5){
    console.log( "Sua nota foi: " + mediaNotas + ". Você foi REPROVADA!")

}else if(mediaNotas >=7){
    console.log( "Sua nota foi: " + mediaNotas + ". Você foi APROVADA!")
}else{
    console.log( "Sua nota foi: " + mediaNotas + ". Você está de RECUPERAÇÃO!")
}


