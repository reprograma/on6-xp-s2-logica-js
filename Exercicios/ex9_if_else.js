// criar um programa que verifica qual é a comida preferida
// se for batata frita exibir no console o texto "acompanha refrigerante?"
// caso contrario exiba no console "sinto muito por vc!"

const readline = require('readline-sync')

//perguntar pra pessoa a comida preferida dela
//e o texto que ela que ela escrever no campo vai ficar guardado em comidaPreferida
// const comidaPreferida = "batata frita"
const comidaPreferida = readline.question("Qual a sua comida preferida? ")

console.log(comidaPreferida)

if(comidaPreferida === "batata frita"){

  console.log("Acompanha refrigerante?")

}else if(comidaPreferida === "bolo"){
  
  console.log("Vai um chá?")

}else if(comidaPreferida === "sushi"){

  console.log("Você quer shoyo?")

}else{

  console.log("Sinto muito por você")

}
