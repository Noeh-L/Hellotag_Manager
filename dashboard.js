const socialMediaButtons = document.getElementsByClassName("rs");
const modalWindow = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".closeModal")
const modalIcon = document.querySelector(".modal-Header--icon")
const modalTitle = document.querySelector(".modal-Header--title")

for (let i = 0; i < socialMediaButtons.length; i++) {
    socialMediaButtons[i].addEventListener("click", (e) => {
        modalWindow.style.display = "flex";
        
        const button = e.target.closest(".rs"); //POURQUOI CA MARCHE ?
        if (button) {
            modalWindow.style.display = "flex";
            console.log(button.id);
            modalTitle.innerHTML = button.id
          }
    });
}

closeModalBtn.addEventListener("click", (e) => {
  modalWindow.style.display = "none";
})