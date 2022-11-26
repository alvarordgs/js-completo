const tabImgs = document.querySelectorAll(".js-tabImgs li");
const tabContent = document.querySelectorAll(".js-tabContent section");

if (tabImgs.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    function showContent(index) {
        tabContent.forEach((section) => {
            section.classList.remove("ativo");
        });

        tabContent[index].classList.add("ativo");
    }

    tabImgs.forEach((img, index) => {
        img.addEventListener("click", () => {
            showContent(index);
        });
    });
}
