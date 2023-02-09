const accordionList = document.querySelectorAll(".texto-dentro h4");
const activeClass = "ativo";

accordionList.forEach((item) => {
  item.addEventListener("click", activeAccordion);
  console.log(item)
});

function activeAccordion() {
  console.log(this);
  this.classList.toggle(activeClass);
  this.nextElementSibling.classList.toggle(activeClass);
}
