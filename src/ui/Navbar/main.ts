import Headroom from "headroom.js";

const whitelist = ['/']
if(!whitelist.includes(location.pathname)){
    const navbarEl = document.getElementById("navbar");

    var headroom = new Headroom(navbarEl);
    headroom.init();
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
        if (document.documentElement.scrollTop > 550) {
            headroom.unfreeze();
        } else {
            headroom.pin();
            headroom.freeze();
        }
    }
    window.addEventListener("scroll", function (evt) {
        initScroll();
    });
    initScroll();
}