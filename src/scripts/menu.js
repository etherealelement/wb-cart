window.addEventListener("DOMContentLoaded", () => {
    
const buttonBurger = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
const hideMenuBtn = document.querySelector(".menu__btn-span");
const overlay = document.querySelector(".side-menu");

buttonBurger.addEventListener("click", (e) => {
    e.preventDefault();
    if (menu.classList.contains("menu__active")) {
        menu.classList.remove("menu__active");
    } else {
        menu.classList.add("menu__active")
    }

    if(menu.classList.contains("menu__disable")) {
        menu.classList.remove("menu__disable");
    } 
    
    hideMenuBtn.classList.add("button-visible");
    overlay.classList.add("overlay")
})

hideMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if(menu.classList.contains("menu__active")) {
        menu.classList.remove("menu__active");
        menu.classList.add("menu__disable");
    }

    hideMenuBtn.classList.remove("button-visible")
    overlay.classList.remove("overlay")
})

overlay.addEventListener("click", () => {
    if(menu.classList.contains("menu__active")) {
        menu.classList.remove("menu__active");
        menu.classList.add("menu__disable");
    }
    hideMenuBtn.classList.remove("button-visible")
    overlay.classList.remove("overlay");
})
})