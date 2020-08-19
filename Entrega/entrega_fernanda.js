const readline = require('readline-sync')

const nome = readline.question("Primeiramente, gostaria de conhecer voce! " + "Qual seu nome? ")
console.log(`Que bom ter voce aqui, ${nome}!`)


const bem_vindo = readline.question("Seja bem-vindo ao Portal do Estudante! " + "Digite OLA para continuar. ")

console.log(bem_vindo)

if(bem_vindo ==="OLA"){
    console.log("Agora, digite sua nota em cada disciplina! Vamos la? ")
} else if(bem_vindo ==="ola"){
    console.log("Agora, digite sua nota em cada discplina! Vamos la? ")
}
else{
    console.log("Digite OLA novamente!")
}

const nota_port = readline.question("Qual sua nota em portugues? ")
const nota_mat = readline.question ("Qual sua nota em matematica? ")
const nota_bio =readline.question ("Qual sua nota em biologia? ")
const nota_hist = readline.question ("Qual sua nota em historia? ")
const nota_filo = readline.question ("Qual foi sua nota em filosofia? ")

const soma = parseFloat(nota_port) + parseFloat(nota_mat) + parseFloat(nota_bio) + parseFloat(nota_hist) + parseFloat (nota_filo)


const media_geral = (soma/ 5)
console.log ("Sua média é " + media_geral)

if (media_geral>=7){
    console.log (`Parabéns ${nome}, você foi aprovada(o)!`)
}else if (media_geral<5){
    console.log (`Você foi reprovada(o)desta vez,${nome}. Vamos estudar juntos?`)
}else
    console.log (`Você está em recuperacao,${nome}. Vamos estudar juntos?`)

