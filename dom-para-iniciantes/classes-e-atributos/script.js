// Adicione a classe ativo a todos os itens do menu
const linksMenu = document.querySelectorAll(".menu li a");

linksMenu.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

for (let i = 0; i < linksMenu.length; i++) {
  if (i !== 0) {
    linksMenu[i].classList.remove("ativo");
  }
}

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");
let cont = 1;
imgs.forEach((img) => {
  if (img.hasAttribute("alt")) {
    console.log(`A imagem [${cont}] tem o atributo ALT!`);
  }
  cont++;
});

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http://"]');

linkExterno.setAttribute("href", "http://www.google.com");
