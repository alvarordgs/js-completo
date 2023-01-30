export default function initModall() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');

    if (botaoAbrir && botaoFechar && containerModal) {
        function modalToggle(event) {
            event.preventDefault();
            containerModal.classList.toggle("ativo");
        }

        function fecharModalSection(event) {
            if (event.target === this) modalToggle(event);
        }

        botaoAbrir.addEventListener("click", modalToggle);
        botaoFechar.addEventListener("click", modalToggle);
        containerModal.addEventListener("click", fecharModalSection);
    }
}
