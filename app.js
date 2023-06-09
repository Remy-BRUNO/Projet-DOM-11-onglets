const btns = document.querySelectorAll(".btn")
const card = document.querySelectorAll(".card")

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    btns.forEach((element) => {
      if (element.dataset.id !== btn.dataset.id) {
        element.classList.remove("active")
      } else {
        element.classList.add("active")
      }
    })
    card.forEach((e) => {
      if (e.id !== btn.dataset.id) {
        e.classList.remove("active")
      } else {
        e.classList.add("active")
      }
    })
  })
})
