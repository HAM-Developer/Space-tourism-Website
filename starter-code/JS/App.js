//MENU
const menu = document.querySelector(".menu");
const hambtn = document.querySelector(".hamburger");
const closebtn = document.querySelector(".close");

hambtn.addEventListener("click", () => {
  menu.classList.add("open_menu");
});
closebtn.addEventListener("click", () => {
  menu.classList.remove("open_menu");
});
