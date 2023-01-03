// Retorne um número aleatório
// entre 1050 e 2000
const numAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(numAleatorio);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const numerosArray = numeros.split(", ");
console.log(Math.max(...numerosArray)); //... -> é o mesmo que passar cada item do array dentro da funcao

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparNumero(numero) {
    numero = +numero.toUpperCase().replace("R$", "").trim().replace(",", ".");
    numero = +numero.toFixed(2);

    return numero;
}

let somaTotal = 0;

listaPrecos.forEach((item) => {
    const numLimpo = limparNumero(item);
    somaTotal += numLimpo;
});

console.log(
    somaTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);
