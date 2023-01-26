function initTabNav() {
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
}

initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll(".js-accordion dt");
    const classActive = "ativo";

    if (accordionList.length) {
        accordionList[0].classList.add(classActive);
        accordionList[0].nextElementSibling.classList.add(classActive);

        function activeAccordion() {
            this.classList.toggle(classActive);
            this.nextElementSibling.classList.toggle(classActive);
        }

        accordionList.forEach((item) => {
            item.addEventListener("click", activeAccordion);
        });
    }
}

initAccordion();
