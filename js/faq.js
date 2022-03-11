// const id = Math.random().toString(36).substring(2);
// console.log(id);

const faq = document.querySelectorAll("[data-faq]");
faq.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.classList.toggle("question-selected");
    e.target.nextElementSibling.classList.toggle("answer-selected");
    e.target.classList.toggle("arrow-up");
  });
});
