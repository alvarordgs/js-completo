import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuLista = document.querySelector('[data-menu="list"]');
    const events = ['click', 'touchstart'];

    if(menuButton) {
        function activeMenu(event) {
            menuButton.classList.add('active');
            menuLista.classList.add('active');
        
            outsideClick(menuLista, events, () => {
                menuButton.classList.remove('active');
                menuLista.classList.remove('active');
            })
        }
        
        events.forEach((event) => {
            menuButton.addEventListener(event, activeMenu);
        })
    }


}

