    //vai armazenar os inputs das notas dos exercicio
    const readline = require('readline-sync')
    const nota1 = readline.question("Ola! Qual a nota do seu exercicio 1? ")
    const nota2 = readline.question("Certo, qual a nota do seu exercicio 2? ")
    const nota3 = readline.question("Digite agora a nota do seu exercicio 3? ")
    const nota4 = readline.question("A nota do seu exercicio 4? ")
    const nota5 = readline.question("Agora digite a nota do seu exercicio 5! ")
        //O readline.question irá perguntar para o usuário as notas dos exercícios fazendo com que haja os inputs 
    const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5)) / 5;

    const media1 = media.toFixed(2)

    console.log("A sua media é: " + media1)

    if (media >= 7) {
        console.log("Parabens!!! Você foi aprovado (a)!");
        //média maior ou igual a 7 
    } else if (media >= 5 && media <= 6.99) {
        console.log("Infelizmente você esta de recuperacao");
        //media maior ou igual a 5 e menor que 7
    } else {
        console.log("Você nao alcancou a nota minima para aprovacao");
        //média menor que 5
    }


    //preciso determinar que os resultados sao numericos pesquisar sobre parsefloat e inserir o toFixed(2)
    //baixar o readline-sync pra pegar os inputs do usuario e guardar
    //confirmar se preciso de mais alguma variavel
    //verificar as sintaxes do diferente e igual nas notas