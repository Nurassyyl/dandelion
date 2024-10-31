document.querySelector(".main__btn").addEventListener('click', () => {
  document.querySelector(".modal").classList.add("active");
  document.querySelector("body").classList.add('hidden');
})

document.querySelector(".close__modal").addEventListener('click', () => {
  document.querySelector(".modal").classList.remove("active");
  document.querySelector("body").classList.remove('hidden');
})

window.onclick = function (e) {
  if (e.target.hasAttribute('data-modal')) {
    document.querySelector(".modal").classList.remove("active");
    document.querySelector("body").classList.remove('hidden');
  }
}

document.querySelectorAll(".btn-partner").forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelector(".modal-feedback").classList.add('active');
    document.querySelector("body").classList.add('hidden');
  })
})

document.querySelector(".modal__exit").addEventListener('click', () => {
  document.querySelector(".modal-feedback").classList.remove('active');
  document.querySelector("body").classList.remove('hidden');
})

// document.querySelector('.modal__body').addEventListener('click', (e) => {
//   if (!e.target.classList.contains("modal-feedback__content") & !e.target.classList.contains("modal__form") & !e.target.classList.contains("modal__input") & !e.target.classList.contains("modal__textarea") & !e.target.classList.contains("modal__submit")) {
//     document.querySelector(".modal-feedback").classList.remove('active');
//     document.querySelector("body").classList.remove('hidden');
//   }
// })