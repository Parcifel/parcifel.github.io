let home_link = document.querySelector(".home-link");
let about_link = document.querySelector(".about-link");
let portfolio_link = document.querySelector(".portfolio-link");
let contact_link = document.querySelector(".contact-link");

home_link.addEventListener("click", () => {
    window.location.href = "index.html";
});

about_link.addEventListener("click", () => {
    window.location.href = "about.html";
});

portfolio_link.addEventListener("click", () => {
    window.location.href = "portfolio.html";
});

contact_link.addEventListener("click", () => {
    window.location.href = "contact.html";
});
