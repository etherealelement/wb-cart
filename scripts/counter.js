window.addEventListener("DOMContentLoaded", () => {
	const counters = document.querySelectorAll("[data-counter]");

	counters.forEach((counter) => {
		counter.addEventListener("click", e => {
            const target = e.target;

            if(target.closest(".order__counter-btn")) {
                let value = parseInt(target.closest(".order__counter-container").querySelector("input").value);

                if(value === 1) {
                    value = 1;
                
                    target.closest(".order__counter-container").querySelector(".btn-minus").classList.add("btn-disable");
                }

                if(value === 2) {
                    value = 2;
                    target.closest(".order__counter-container").querySelector(".btn-plus").classList.add("btn-disable")
                    
                }

                if(target.classList.contains("btn-plus")) {
                    value++
                }  else if (target.classList.contains("icon-plus")) {
                    value++;
                } else {
                    --value;
                }

                
            

                target.closest(".order__counter-container").querySelector("input").value = value
            }
        })
	});
});
