var pessoa = {
  nome: "Álvaro",
  idade: 24,
};

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};
