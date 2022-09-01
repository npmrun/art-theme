const navbarEl = document.getElementById("navbar");

function initScroll() {
    if (document.documentElement.scrollTop > 120) {
        if (!navbarEl.classList.contains("hover-navbar")) {
            navbarEl.classList.add("hover-navbar");
        }
    } else {
        if (navbarEl.classList.contains("hover-navbar")) {
            navbarEl.classList.remove("hover-navbar");
        }
    }
}
window.addEventListener("scroll", function (evt) {
    initScroll();
});
initScroll();
