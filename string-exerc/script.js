// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
        descricao: "Taxa do Pão",
        valor: "R$ 39",
    },
    {
        descricao: "Taxa do Mercado",
        valor: "R$ 129",
    },
    {
        descricao: "Recebimento de Cliente",
        valor: "R$ 99",
    },
    {
        descricao: "Taxa do Banco",
        valor: "R$ 129",
    },
    {
        descricao: "Recebimento de Cliente",
        valor: "R$ 49",
    },
];

let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((transacao) => {
    if (transacao.descricao.includes("Taxa")) {
        taxaTotal = taxaTotal + Number(transacao.valor.substring(3));
    } else if (transacao.descricao.includes("Recebimento")) {
        recebimentoTotal =
            recebimentoTotal + Number(transacao.valor.substring(3));
    }
});

console.log(
    `Total das taxas: ${taxaTotal}\nTotal dos recebimentos: ${recebimentoTotal}`
);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
console.log(transportes.split(";"));

// Substitua todos os span's por a's
let html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

console.log(html.replace(/[span]+/g, "a"));
//ou

html = html.split("span").join("a");
console.log(html);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";
console.log(frase.slice(-1));

// Retorne o total de taxas
const transacoes2 = [
    "Taxa do Banco",
    "   TAXA DO PÃO",
    "  taxa do mercado",
    "depósito Bancário",
    "TARIFA especial",
];

let cont = 0;
transacoes2.forEach((item) => {
    if (
        item.includes("Taxa") ||
        item.includes("TAXA") ||
        item.includes("taxa")
    ) {
        cont++;
    }
});

console.log(`Quantidade de taxas: ${cont}`);
