<h1 align="center">
  <br>
  <img src="assets/web-development.png" alt="Front-End Checklist" width="170">
  <br>
    <br>
        Semana 2
  <br>
</h1>
<p align="center">Resolução de Problemas/Lógica aplicada e JavaScript<p>


## Sumário

1. **[Ambiente](#ambiente)**
2. **[Lógica](#lógica)**
3. **[Variáveis](#variáveis)**
4. **[Dados](#dados)**
5. **[Operadores](#operadores)**
6. **[Condicionais](#condicionais)**
7. **[Extra](#extra)**

----

## Ambiente

![node](./assets/nodejs.jpg)

### O que é o node?

O Node.js pode ser definido como um ambiente de execução Javascript server-side, ou seja com o node usamos JavaScript do lado do servidor

### Já tem o node instalado?

Para checar digite na linha de comando:

`node --version`

Se tiver instalado vai aparecer a versão.
Caso não tenha, esse é o link para instalação: https://nodejs.org/en/download/

````> console.log("Hello World")````

### Pra rodar nossos códigos
Nós vamos rodar nossos códigos Js dentro do próprio VSCode com essa ferramenta: `Code Runner`

![runner](./assets/runner.png)

Depois de instalado é só rodar `ctrl+alt+n` no arquivo `.js`

----

## Lógica

### Objetivo
Entender os princípios básicos de lógica de programação utilizando a linguagem JavaScript

### Porque aprender lógica com Javascript
> JavaScript pode ser a linguagem ideal para quem quer aprender a programar. No JavaScript todo o processo de configuração de ambiente é minimizado. Isso não parece grande vantagem, mas você pode repetir o feito em casa, em um computador diferente, com outro browser e sistema operacional - [Paulo Silveira](https://blog.caelum.com.br/comecar-a-programar-e-com-javascript/)

Recursos necessários para esta aula - navegador e editor de texto 

### O que é um algoritmo
> [Ada Lovelace, a primeira programadora de todos os tempos](https://canaltech.com.br/curiosidades/mulheres-historicas-ada-lovelace-a-primeira-programadora-de-todos-os-tempos-71395/)

**Algoritmo é uma "receita"** para executarmos uma tarefa ou resolver algum problema. Utilizamos algoritmos no nosso dia-a-dia para a execução de alguma tarefa ou até mesmo resolver algum problema.

Para fazer um computador fazer qualquer coisa, você precisa escrever um programa de computador. Para escrever um programa de computador, você tem que dizer ao computador, passo a passo, exatamente o que você quer que ele faça. O computador "executa" o programa, seguindo cada etapa mecanicamente, para atingir o objetivo final.

**Alguns exemplos de algoritmos que podemos citar: receitas culinárias, manual de instrução de aparelhos e funções matemáticas.**

Pense na receita culinária, por exemplo. Ela tem os ingredientes necessários **(dados de entrada)**, passo a passo para realizar a receita **(processamento ou instruções lógicas)** e o prato finalizado **(saída esperada)**. 

Um algoritmo, portanto, conta com a entrada (input), com o processamento desses dados e saída (output) de informações.

As estruturas de um algoritmo são:

- **variáveis**: são as informações de entrada inseridas que determinam aonde o algoritmo poderá ir. As mais comuns são texto, inteiro, lógico e real;
- **comandos de repetição***: consiste no uso de “se” e “enquanto”, para que o algoritmo saiba o que fazer quando determinados processos ocorrerem e o que fazer se eles mudarem.

<img src="assets/flow-2.png">

----

## Variáveis

O recurso utilizado nos programas para escrever e **ler dados da memória do computador** é conhecido como variável, que é simplesmente um espaço na memória o qual reservamos e damos um nome. Por exemplo, podemos criar uma variável chamada "idade" para armazenar a idade de uma pessoa. Você pode imaginar uma variável como uma gaveta "etiquetada" em um armário.

<img src="assets/var.png">

Toda vez que precisarmos armezanar e recuperar dados utilizaremos variáveis.

No Javascript temos 3 maneiras de usar variáveis:
- var
- let
- const 

```javascript
const numero = 1
const texto = "Javascript!!!"
```

Declarando variáveis

Um identificador JavaScript deve começar com: 
- uma letra
- underline (_)
- cifrão ($)

Os caracteres subsequentes podem também ser 
- números (0-9)
- letras incluem caracteres de "A" a "Z" (maiúsculos)
- caracteres de "a" a "z" (minúsculos)

Uma varivável não pode ser uma palavra reservada, [clique aqui para saber quais são:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)

----

## Dados

#### String
é uma sequência de caracteres usados para representar texto.

```javascript
"Variáveis em Javascript são uma forma para se salconst dados"
"Isabelle"
"1 é um número ímpar"
```

#### Number
é um tipo de dado numérico. 

```javascript
1
20
300
4000
94863049863409863
```

#### Boolean
é um tipo de dado lógico que pode ter apenas um de dois valores possíveis: verdadeiro ou falso. 

```javascript
false
true
```

#### Null
representa um valor nulo ou "vazio".

```javascript
null
```

```javascript
const y = null;
console.log(y)
```

#### undefined

```javascript
undefined
```

```javascript
const x;
console.log(x)
```

O javascript não tem o que chamamos de tipagem de dados que é literalmente descrever qual é o tipo dessa variável, o que ele faz é "entender/adivinhar" qual é o tipo de dados de determinada variável sem ela ter sido declarada no código escrito.

> Vamos aos programas e aos processamentos de dados

----

## Operadores 

#### Operadores de atribuição
O operador de atribuição básico é o igual (=), que atribui o valor do operando à direita ao operando à esquerda. Isto é, x = y atribui o valor de y a x.

##### Igual
```javascript
const y = 7;
const x = y; // x é igual à 7
```

#### Operadores Aritméticos

##### Adição (+)

```javascript
const y = 7;
const x = 3;
const resultado = y + x 
console.log(resultado) // 10
```

##### Subtração (-)

```javascript
const y = 5;
const x = 2;
const resultado = y - x 
console.log(resultado) // 3
```

##### Multiplicação(*)

```javascript
const y = 4;
const x = 5;
const resultado = y * x 
console.log(resultado) // 20
```

##### Divisão (/) 
O operador de divisão produz o quociente de seus operandos onde o operando da esquerda é o dividendo e o da direita é o divisor.


```javascript
const y = 10;
const x = 2;
const resultado = y / x 
console.log(resultado) // 5
```

##### Módulo (%)
O operador módulo retorna o resto inteiro da divisão de um numero pelo outro.

```javascript
const y = 10;
const x = 2;
const resultado = y % x 
console.log(resultado) // 0
```

#### Operadores de Comparação - Relacional e Igualdade

##### == Igual 
Retorna verdadeiro caso os operandos sejam iguais.	

```javascript
3 == var1
"3" == var1
3 == '3'
```

##### != Não igual	
Retorna verdadeiro caso os operandos não sejam iguais.	

```javascript
var1 != 4
var2 != "3"
```
##### === Estritamente igual 
Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo. Veja também Object.is e igualdade em JS.

```javascript
3 === var1
```

##### !== Estritamente não igual 
Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.

```javascript
var1 !== "3"
3 !== '3'
```
*O double equals vai tentar nos ajudar na comparação, e ao notar que estamos tentando comparar tipos diferentes (string e number) ele vai tentar converter a string para number. No caso acima ele consegue e por isso temos o resultado true.*

Entao por baixo dos panos o que aconteceu foi:
``2 == Number("2") //true``

*Com o triple equals o javascript nunca tenta converter os valores. Por isso, o resultado false.*

Sendo assim, __recomenda-se usar o triple equals__ para evitar surpresas.

E a internet não perdoa as surpresas:

![meme1](./assets/meme-javascripto.png)

##### > maior que
O operador de Maior retorna true se o operando da esquerda for maior que o operando da direita.

```javascript
4 > 3 // true
```

##### >= maior ou igual a
O operador maior ou igual retorna true se o operando da esquerda for maior ou igual ao operando da direita.

```javascript
4 >= 3 // true
3 >= 3 // true
```

##### < menor que
O operador menor retorna true (verdadeiro) se o operando da esquerda for menor que o operando da direita.

```javascript
3 < 4 // verdade
```

##### <= menor ou igual a
O operador menor ou igual retorna true (verdadeiro) se o operando da esquerda for menor ou igual ao operando da direita.

```javascript
3 <= 4 // verdade
```

#### Operadores Lógicos

##### && E lógico 
Se o primeiro valor for verdadeiro, ou puder ser considerado ou convertido pra verdadeiro retorna o segundo valor.

Se o primeiro valor for falso, retorna falso.

```javascript
true && "oi" // "oi"
"oi" && true // true
true && false // false
```

##### || Ou lógico 
Se o primeiro valor for verdadeiro, ou puder ser considerado ou convertido pra verdadeiro retorna o primeiro valor.

Se o primeiro valor for falso, retorna o segundo valor.

```javascript
false || true // true
false || false // false
false || "oi" // "oi"
false || 0 // 0
```

##### ! Não lógico 
Esse operador inverte o valor de uma expressão

Obs: Se um valor pode ser convertido para verdadeiro, este valor é chamado de truthy. Se um valor pode ser convertido para falso, este valor é chamado de falsy.

Exemplos de expressões que podem ser convertidas para falso são:

- null;
- NaN;
- 0;
- string vazia (""); 
- undefined.

Todos os outros são considerados verdadeiros.

```javascript
!true // false
!false // true
!'Oi' // false
!'' // true
```

----

## Condicionais

Usamos para verificar uma condição e definir se algo deve ou não acontecer a partir da condição dada.

É a linguagem que utilizamos para nos comunicar, repare:

Se amanhã fizer sol, vou viajar para a praia.

Temos uma condição (Se amanhã fizer sol) para executar uma ação (viajar para a praia) dependendo do resultado dessa condição. Se verdadeira, a ação é executada.

#### Expressões condicionais simples

```javascript
// Variável booleana verdadeira
const sol = true;

// Condição
if ( sol ) {
	// Ação
	console.log('Vou viajar para a praia!');
}
```

#### Estrutura if / else

```javascript
// Variável booleana verdadeira
const sol = false;

// Condição
if ( sol ) {
	// Ação
	console.log('Vou viajar para a praia!');
}else{
	// Ação
	console.log('Vou ao cinema');
}
```


#### Estrutura if / else if / else

```javascript
// Variável booleana verdadeira
const hora = 8;

// Condição
if ( hora <= 12 ) {
	// Ação
	console.log('Bom dia');
}else if( hora <= 18){
	// Ação
	console.log('Boa tarde');
}else{
	// Ação
	console.log('Boa noite');
}
```

```javascript
if ( condição ) {
	// Ação
} else if ( outra condição ) {
	// Ação
} else if ( outra condição ) {
	// Ação
} else if ( outra condição ) {
	// Ação
} else if ( quantas condições quiser ) {
	// Ação
} else {
	// Ação final se nenhuma condição for verdadeira
}
```

## Extra

Para pegar inputs no terminal precisamos baixar o `readline-sync`

Para confirmar que o npm está instalado, você pode executar este comando no seu terminal:

```
npm -v
```
O npm é um gerenciador de pacotes para a linguagem de programação JavaScript. 

Instale o `readline-sync`

```
npm install readline-sync
```

Coloque essa linha no topo do arquivo do seu código:

```
const input = require("readline-sync");
```

Exemplo:

```javascript
const readlineSync = require('readline-sync');
 
// Para .
const nome = readlineSync.question('Qual o seu nome? ');
console.log('Oi ' + nome + '!');
 
// Texto secreto (por exemplo, senha).
const comidaPreferida = readlineSync.question('Qual a sua comida preferia? ', {
  hideEchoBack: true // O texto digitado na tela está oculto por `*`.
});
console.log(nome + ' ama ' + comidaPreferida + '!');
```

Saída
```
Qual o seu nome? Isabelle
Oi Isabelle!
Qual a sua comida preferia? ****
Isabelle ama batata frita!
```