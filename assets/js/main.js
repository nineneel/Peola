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
    menuShow("sidenav", "show-menu");
});

/*===== MODAL SHOW =====*/
function modalShow(id, className) {
    const modal = document.getElementById(id);

    if (modal.classList.contains(className)) {
        modal.classList.remove(className);
    } else {
        modal.classList.add(className);
    }
}

const todoItems = document.querySelectorAll(".task__item");

todoItems.forEach((todoItem) => {
    todoItem.addEventListener("click", () => {
        menuShow("modal", "show-modal");
    });
});

// close modal button
const modalCloseBtn = document.querySelector(".modal__close");

modalCloseBtn.addEventListener("click", () => {
    menuShow("modal", "show-modal");
});
