const socialMediaButtons = document.getElementsByClassName("rs");
const modalWindow = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".closeModal")
const modalIcon = document.querySelector(".modal-Header--icon")
const modalTitle = document.querySelector(".modal-Header--title")

for (let i = 0; i < socialMediaButtons.length; i++) {
    socialMediaButtons[i].addEventListener("click", (e) => {
        modalWindow.style.display = "flex";
        
        const socialMediaClicked = e.target.closest(".rs"); // utilisation de closest pour transmettre l'evenement au child (icone <i>)
        const socialMediaEmailIcon = socialMediaClicked.querySelector(".fa-envelope"); // exception pour pouvoir afficher l'icone enveloppe qui n'a pas les mêmes classe que le reste (fa-regular au lieu de fa-brands)

        if (socialMediaClicked && !socialMediaEmailIcon) {
            modalIcon.innerHTML = `<i class="fa-brands fa-${socialMediaClicked.id}"></>`
            modalTitle.innerHTML = socialMediaClicked.dataset.social
        } else {
            modalIcon.innerHTML = `<i class="fa-regular fa-${socialMediaClicked.id}"></>`
            modalTitle.innerHTML = socialMediaClicked.dataset.social
        }

    });
}

closeModalBtn.addEventListener("click", (e) => {
  modalWindow.style.display = "none";
})