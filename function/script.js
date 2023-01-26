// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll("p");

const somaParagrafos = Array.prototype.reduce.call(
    paragrafos,
    function (acumulador, atual) {
        return acumulador + atual.innerText.length;
    },
    0
);

console.log(somaParagrafos);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
    const element = document.createElement(tag);
    classe ? element.classList.add(classe) : null;
    conteudo ? (element.innerHTML = conteudo) : null;

    return element;
}

console.log(criarElemento("h1", "titulo", "O melhor desenvolvedor do mundo"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, "h1", "titulo");
console.log(h1Titulo("Hello world"));
