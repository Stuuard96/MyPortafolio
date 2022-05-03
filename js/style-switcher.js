/*----------------- Variable Declaration -------------------*/
const body = document.body;
const iconToggle = document.querySelector(".style__switcher--toggler");
const styleSwitcherToggle = document.querySelector(".style__switcher");
const alternateStyles = document.querySelectorAll(".alternate__style");
const dayNight = document.querySelector(".day__night");

/*------------------- Execution functions ------------------*/
iconToggle.addEventListener("click", switcherToggle);
/* window.addEventListener("scroll", windowScroll); */
dayNight.addEventListener("click", dayNighToggle);
window.addEventListener("load", dayNighTheme);

/*------------------- Toggle Style Switcher ----------------*/
function switcherToggle() {
    styleSwitcherToggle.classList.toggle("open");
}

/*------------- Hide Style - Switcher On Scroll ------------*/
allSection.forEach(element => {
    element.addEventListener("scroll", windowScroll);
});

function windowScroll() {
    if (styleSwitcherToggle.classList.contains("open")) {
        styleSwitcherToggle.classList.remove("open");
    }
}

/*---------------------- Theme Colors ----------------------*/
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

/*------------------ Theme Litgh and Dark ------------------*/
function dayNighToggle() {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    body.classList.toggle("dark");
}

function dayNighTheme() {
    if (body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
}