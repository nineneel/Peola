/*==================== MENU SHOW Y HIDDEN ====================*/

/*===== MENU SHOW =====*/
function menuShow(id, className) {
    const navBar = document.getElementById(id);

    if (navBar.classList.contains(className)) {
        navBar.classList.remove(className);
    } else {
        navBar.classList.add(className);
    }
}

const toggleMenu = document.querySelector(".header__toggle");

toggleMenu.addEventListener("click", () => {
    menuShow("navbar", "show-menu");
});
