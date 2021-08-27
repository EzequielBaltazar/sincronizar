let menu = document.querySelector("#menu");
let toggleicon = document.querySelector("#toggleicon");

toggleicon.addEventListener("click", function() {
    menu.classList.toggle("menu-on");
}