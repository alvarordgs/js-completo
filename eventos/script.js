// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const listLinks = document.querySelectorAll('a[href^="#"]');

function handleLinks(event) {
  event.preventDefault();
  listLinks.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

listLinks.forEach((link) => {
  link.addEventListener("click", handleLinks);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll("body *");

function handleElement(event) {
  event.currentTarget.remove();
}

/* allElements.forEach((item) => {
  item.addEventListener("click", handleElement);
}); */

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

//----------

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleKeyDown(event) {
  console.log(event.key);
  if (event.key === "t") {
    document.documentElement.classList.toggle("textoMaior");
  }
}

window.addEventListener("keydown", handleKeyDown);
