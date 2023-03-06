//setTimeout
/*setTimeout é uma função assíncrona e 
mesmo com o tempo setado para 0, 
a função de callback de setTimeout iria esperar 
todas as outras execuções terminarem, para ser executada. */
function esperar(texto) {
    console.log(texto);
}

setTimeout(esperar, 5000, 'Esperei!');

/*o setTimeout é um metodo do objeto window,
entao quando usamos o this usando function(){} estamos
referenciando ao objeto window. Por isso se quisermos nos referenciar 
a um outro objeto, devemos usar arrow function para referenciar o objeto pai. Ex: */
const btn = document.querySelector('button');
btn.addEventListener('click', clicou);

function clicou(){
    setTimeout(() => {
        this.classList.add('active');
    }, 1000);
}

//setInterval
/*O setInterval funciona como o setTimeout, a diferença é que ele funciona como um loop, 
de acdordo com o tempo definido. */
let i = 0;

setInterval(() => {
    //console.log(i++);
}, 300);

//Para que possamos parar o loop, podemos usar o clearInterval, mas para usarmos o clearInterval devemos colocar o setInterval em uma variavel
let cont = 0;

const meuLoop = setInterval(() => {
    console.log(cont++);
    if(cont > 10){
        clearInterval(meuLoop);
    }
}, 300);