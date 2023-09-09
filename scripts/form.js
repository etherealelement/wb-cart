window.addEventListener("DOMContentLoaded", () => {
	"use strict";
	const inputEmail = document.querySelector(".text-3");
	const inputPhone = document.querySelector(".text-4");
	const inputInn = document.querySelector(".text-5");
	const formSpan = document.querySelector(".form__span")

	// email validation
	inputEmail.addEventListener("blur", function() {
		const inputEmailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

		if (!inputEmailRegex.test(this.value)) {
			inputEmail.classList.add("unvalid");
			formSpan.classList.add("form__span-visible");
		} else {
			inputEmail.classList.remove("unvalid");
			formSpan.classList.remove("form__span-visible");
		}

		if(this.value.length === 0) {
			formSpan.innerHTML = "Укажите электронную почту"
		} else {
			formSpan.innerHTML = "Проверьте адресс электронной почты"
		}
	})

	inputEmail.addEventListener("focus", function(){
		inputEmail.classList.remove("unvalid")
	})

	// 

	// phone validation

	inputPhone.addEventListener("blur", function() {
		const inputPhoneRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

		if (!inputPhoneRegex.test(this.value)) {
			inputPhone.classList.add("unvalid")
		} else {
			inputPhone.classList.remove("unvalid")
		}
	})

});
