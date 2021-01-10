const button = document.querySelector("#hamburger");
const nav    = document.querySelector("nav");

button.addEventListener("click", () => {
    if (button.classList.contains("active")) {
        button.classList.remove("active");
        nav.classList.add("hidden");
    }
    else {
        button.classList.add("active");
        nav.classList.remove("hidden");
    }
});