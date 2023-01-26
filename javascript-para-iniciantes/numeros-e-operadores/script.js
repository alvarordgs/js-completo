//Exercicio tipos de dados
var texto = "Hola";
var numTexto = "10";
var idade = 24;
console.log(typeof texto);
console.log(typeof numTexto);
console.log(typeof idade);

var nome = "Álvaro";
var sobrenome = "Silva";
var nomeCompleto = `${nome} ${sobrenome}`;
console.log(nomeCompleto);

var frase = `It's time`;
console.log(frase);

//exercicio 2
var total = 10 + (5 * 2) / 2 + 20;
console.log(total);

//Crie duas espressões que retornem Nan
var expressao1 = "Teste" / 2;
console.log(expressao1);
var expressao2 = "Teste" - 2;
console.log(expressao2);

var soma = +"200" + 50;

var i = 5;
console.log(++i);

var numero = +"80" / 2;
var unidade = "kg";
var peso = numero + unidade;
console.log(peso);
