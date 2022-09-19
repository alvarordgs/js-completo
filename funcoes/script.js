// Verifique se a sua idade é maior do que a de algum parente
var myId = 24;
var idParente = 24;
if (myId > idParente) {
  console.log("Idade maior");
} else {
  console.log("Idade menor");
}
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
if (myId > idParente) {
  console.log("É maior");
} else if (myId === idParente) {
  console.log("É igual");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2; //R: 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

if (dinheiroNaConta) {
  console.log("Verificar variavel: Verdadeiro");
} else {
  console.log("Verificar variavel: Falso");
}

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log(`Brasil tem mais habitantes! População: ${brasil} milhões`);
} else {
  console.log(`China tem mais habitantes! População: ${china} milhões`);
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
