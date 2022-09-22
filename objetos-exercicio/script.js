// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var pessoa = {
  nome: "Álvaro",
  sobrenome: "Silva Rodrigues",
  idade: 24,
  aniversario() {
    var date = new Date();
    var diaAniversario = date.getDate();
    var mesAniversario = date.getMonth();

    if (diaAniversario === 18 && mesAniversario === 1) this.idade++;
  },
};

// Crie um método no objeto anterior, que mostre o seu nome completo
pessoa.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
},

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  reacao(alvo) {
    if (alvo === "homem") {
      return "latir";
    } else if (alvo === "femea") {
      return "cruzar";
    } else {
      return "ignorar";
    }
  },
};
