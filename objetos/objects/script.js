// Crie uma função que verifique
// corretamente o tipo de dado
function verifyDateType(date) {
    return Object.prototype.toString.call(date);
}

const text = "asjdhf";
const obj = {
    carro: "popular",
    viajar: function () {
        return "Carro para viajar";
    },
};

const vet = ["a", "b", "c"];
const func = function () {
    console.log("Isso é uma funcao!");
};

console.log(verifyDateType(func));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {};

Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        configurable: true,
        writable: false,
    },
});

console.log(quadrado.lados);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: "#333",
};

Object.freeze(configuracao);
console.log(Object.isFrozen(configuracao));

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(Array.prototype));

console.log(Object.getOwnPropertyNames(String.prototype));
