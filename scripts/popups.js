window.addEventListener("DOMContentLoaded", () => {
    "use strict"
    const closeBtn = document.querySelector(".popup-payment__top-spn");
    const openBtn = document.getElementById("delevery-btn");
    const overlay = document.querySelector(".overlay");
    
    openBtn.addEventListener("click", () => {
        overlay.classList.add("open-overlay")
    })

    closeBtn.addEventListener("click", () => {
        overlay.classList.remove("open-overlay")
    })

    overlay.addEventListener("click", () => {
        overlay.classList.remove("open-overlay");        
    })

})