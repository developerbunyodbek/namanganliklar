// SELECTORS
const elOpenModalBtn = document.querySelector(".open-modal");
const elCloseModalBtn = document.querySelectorAll("#close-btn");
const elModalContainer = document.querySelector(".modal-container");

// OPEN MODAL
for (let i of elCloseModalBtn) {
  i.addEventListener("click", () => {
    elModalContainer.classList.remove("open");
  });
}

elOpenModalBtn.addEventListener("click", () => {
  elModalContainer.classList.add("open");
});
