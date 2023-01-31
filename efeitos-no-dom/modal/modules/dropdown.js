import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
    const dropdownMenus = document.querySelectorAll("[data-dropdown]");

    dropdownMenus.forEach((menu) => {
        ["thouchstart", "click"].forEach((userEvent) => {
            menu.addEventListener(userEvent, handleClick);
        });
    });

    function handleClick(event) {
        event.preventDefault();
        this.classList.add("active");
        outsideClick(this, ["thouchstart", "click"], () => {
            this.classList.remove("active");
        });
    }
}
