// Retorne no console todas as imagens do site
const imgsSite = document.querySelectorAll("img");

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgs = document.querySelectorAll('img[src^="./img/imagem"]');

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');

// Selecione o primeiro h2 dentro de .animais-descricao
const selectH2 = document.querySelector(".animais-descricao h2");

// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");

console.log(paragrafos[--paragrafos.length]);
