let menu = document.querySelector(".menu");
let nav = document.querySelector("nav");

menu.addEventListener("click", function () {
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    menu.style.backgroundImage = `url("assets/images/icon-menu-close.svg")`;
    menu.style.height = "40px";
    document.body.classList.add("cover");
    menu.style.position = "fixed";
    menu.style.right = "20px";
  } else {
    menu.style.backgroundImage = `url("assets/images/icon-menu.svg")`;
    menu.style.height = "20px";
    menu.style.position = "static";
    document.body.classList.remove("cover");
  }
});
