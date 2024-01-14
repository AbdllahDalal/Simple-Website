let menu = document.querySelector(".header .links");
menu.addEventListener("click", () => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
  } else {
    menu.classList.add("open");
  }
});
console.log(menu);
