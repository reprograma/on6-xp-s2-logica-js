const readline = require('readline-sync')

const numero = readline.question("Digite um número: ")// o readline vai retornar uma String

// const numeroFormatado = parseInt(numero) 
const numeroFormatado = parseFloat(numero) 

// parseInt =  ele força uma transformação p/ um num inteiro
// parseFloat =  ele força uma transformação p/ um num decimais

// console.log(50 / 2) = 25
// console.log(50 % 2) = 0 ----> o operador % módulo retorna o resto de uma divisão

/*
Vamos escrever um programa que receba um número. 
Se o número for múltiplos de 3 o console imprimirá a palavra “Fizz”. 
Se for múltiplo de 5 mostraremos “Buzz”. 
Agora, se ele for múltiplo de 3 e 5 mostre “FizzBuzz”.
*/

if(numeroFormatado % 3 === 0 && numeroFormatado % 5 === 0){

  console.log("FizzBuzz")

}else if(numeroFormatado % 3 === 0){

  console.log("Fizz")

}else if(numeroFormatado % 5 === 0){

  console.log("Buzz")

}else{

  console.log("Não é nenhum dos dois")
  
}