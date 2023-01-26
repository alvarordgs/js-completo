// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll(".curso");
const cursosArray = Array.from(cursos);

const newCursosArray = cursosArray.map((curso) => {
    const titulo = curso.querySelector("h1").innerHTML;
    const descricao = curso.querySelector("p").innerHTML;
    const aulas = curso.querySelector(".aulas").innerHTML;
    const horas = curso.querySelector(".horas").innerHTML;

    return {
        titulo,
        descricao,
        aulas,
        horas,
    };
});

console.log(newCursosArray);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numMaior100 = numeros.filter((n) => n > 100);
console.log(numMaior100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const existeBaixo = instrumentos.some((instrumento) => instrumento === "Baixo");

console.log(existeBaixo);

// Retorne o valor total das compras
const compras = [
    {
        item: "Banana",
        preco: "R$ 4,99",
    },
    {
        item: "Ovo",
        preco: "R$ 2,99",
    },
    {
        item: "Carne",
        preco: "R$ 25,49",
    },
    {
        item: "Refrigerante",
        preco: "R$ 5,35",
    },
    {
        item: "Quejo",
        preco: "R$ 10,60",
    },
];

const vlTotalCompras = compras.reduce((acumulador, compra) => {
    const precoLimpo = +compra.preco.slice(3).replace(",", ".");
    acumulador += precoLimpo;
    return acumulador;
}, 0);

console.log(vlTotalCompras);
