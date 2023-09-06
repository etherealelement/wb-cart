window.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".order__btn");
    const checkbox = document.getElementById("payments");
    const totalSum = document.getElementById("total__sum");
    const debitContext = document.querySelector('.debit__text')
    const debitSub = document.querySelector(".debit__subtitle");

    debitContext.addEventListener("click", () => {
        button.textContent = `Оплатить ${totalSum.innerText} сом`;
    
        if (debitSub.classList.contains("debit__subtitle-hide")) {
            button.textContent = 'Заказать';
        }
    })
    
})