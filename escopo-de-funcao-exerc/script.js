// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}
//console.log(var, marca, portas); //Porque var não é uma variavel, é uma palavra reservada para declarar variáveis e as outras duas váriaveis marca e portas não foramn definidas porque foram declaradas em escopo de bloco e não existem fora dele

// Como corrigir o erro abaixo?
const dois = 2;

function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
