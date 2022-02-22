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
if (toggleMenu !== null) {
    toggleMenu.addEventListener("click", () => {
        menuShow("sidenav", "show-menu");
    });
}

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

if (todoItems !== null) {
    todoItems.forEach((todoItem) => {
        todoItem.addEventListener("click", () => {
            menuShow("modal", "show-modal");
        });
    });
}

// close modal button
const modalCloseBtn = document.querySelector(".list__close");

if (modalCloseBtn !== null) {
    modalCloseBtn.addEventListener("click", () => {
        menuShow("modal", "show-modal");
    });
}

// show sort date picker income
const datePickerBtn = document.querySelector(".date-picker__btn");

if (datePickerBtn !== null) {
    datePickerBtn.addEventListener("click", () => {
        menuShow("range__date-picker", "show__date-picker");
    });
}
