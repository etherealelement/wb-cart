window.addEventListener("DOMContentLoaded", () => {
    const checkSpan = document.querySelector(".select-all");
    const labelCheck = document.querySelector(".checkbox__wrap-spn");
    const checkboxes = document.querySelectorAll(".selected-check");
    const debitText = document.querySelector(".debit__text");
    const debitSub = document.querySelector(".debit__subtitle");
    const checkboxPayment = document.getElementById("payments")


    labelCheck.addEventListener("click", () => {
        for (const checkbox of checkboxes) {
            if(checkbox.checked) {
                checkbox.removeAttribute("checked", "checked");
            } else {
                checkbox.setAttribute("checked", "checked")
            }
        }
    })

    checkSpan.addEventListener("click", () => {
        for (const checkbox of checkboxes) {
            if(checkbox.checked) {
                checkbox.removeAttribute("checked", "checked");
            } else {
                checkbox.setAttribute("checked", "checked")
            }
        }
    })

    debitText.addEventListener("click" , () => {
        if (debitSub.classList.contains("debit__subtitle-hide")) {
            debitSub.classList.remove("debit__subtitle-hide")
        } else {
            debitSub.classList.add("debit__subtitle-hide")
        }
    })

    checkboxPayment.addEventListener("click" , () => {
        if (debitSub.classList.contains("debit__subtitle-hide")) {
            debitSub.classList.remove("debit__subtitle-hide")
        } else {
            debitSub.classList.add("debit__subtitle-hide")
        }
    })
})