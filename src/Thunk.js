window.addEventListener("scroll", () => {
  document
    .querySelector(".fixedBtn")
    .classList.toggle("btn-show", window.scrollY > 1);
});
