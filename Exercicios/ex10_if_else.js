const readline = require('readline-sync')

const tempo = readline.question("Qual o tempo hoje? ")

// se for sol vai a praia
// se for nublado vai andar de bicicleta
// se for de chuva fica em casa
// se não for nada fala "atividade não encontrada"

if(tempo === "sol"){
  console.log("Vá a praia!")
}else if(tempo === "nublado"){
  console.log("Vá andar de bicicleta")
}else if(tempo === "chuva"){
  console.log("Fique em casa!")
}else{
  console.log("Atividade não encontrada :(")
}