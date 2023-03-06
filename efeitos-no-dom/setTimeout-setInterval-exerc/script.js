// Mude a cor da tela para azul e depois para vermelho a cada 2s.

/*
function mudarClasse() {
    document.body.classList.toggle('active');
}

setInterval(mudarClasse, 2000);
*/

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const temp = document.querySelector('[data-js="temp"]');
const play = document.querySelector('[data-js="play"]');
const pause = document.querySelector('[data-js="pause"]');
const reset = document.querySelector('[data-js="reset"]');

let cont = 0;
let timer;

function iniciar() {
    timer = setInterval(() => {
        temp.innerText = cont < 10 ? `0${cont}` : cont;
        cont++;    
    }, 1000);

    play.setAttribute('disabled', '');
}

function pausar() {
    clearInterval(timer);
    play.removeAttribute('disabled');

    if(cont != 0){
        cont = Number(temp.innerText);
    }
}

function resetar() {
    clearInterval(timer);
    play.removeAttribute('disabled');
    temp.innerText = '00';
    cont = 0;
}


play.addEventListener('click', iniciar);
pause.addEventListener('click', pausar);
reset.addEventListener('click', resetar);