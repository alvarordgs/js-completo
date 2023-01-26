const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
const firstValue = comidas.shift();
console.log(firstValue);
// Remova o último valor de comidas e coloque em uma variável
const lastValue = comidas.pop();
console.log(lastValue);
// Adicione 'Arroz' ao final da array
comidas.push("Arroz");
console.log(comidas);
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift("Peixe", "Batata");
console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort());
// Inverta a ordem dos estudantes
console.log(estudantes.reverse());
// Verifique se Joana faz parte dos estudantes
console.log(
    estudantes.includes("Joana") === true
        ? "Joana faz parte dos estudantes"
        : "Joana NAO faz parte dos estudantes"
);
// Verifique se Juliana faz parte dos estudantes
console.log(
    estudantes.includes("Juliana") === true
        ? "Juliana faz parte dos estudantes"
        : "Juliana NAO faz parte dos estudantes"
);

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
let htmlString = html.split("div").join("li").split("section").join("ul");
console.log(htmlString);

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const arrayOriginal = carros.slice();
console.log(carros.pop());
console.log(carros);
console.log(arrayOriginal);
