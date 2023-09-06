window.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".selected-check");
    const checkSpan = document.querySelector(".select-all");
    const labelCheck = document.querySelector(".checkbox__wrap-spn");
    
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
})