

document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
        const heading = accordion.querySelector(".accordion-heading");
        const plusIcon = heading.querySelector(".plus-icon");
        const minusIcon = heading.querySelector(".icon-minus");
        const answer = accordion.querySelector(".answer");

        heading.addEventListener("click", () => {
            accordion.classList.toggle("active");

            plusIcon.classList.toggle("hide");
            minusIcon.classList.toggle("show");
            answer.classList.toggle("show");
        });
    });
});


