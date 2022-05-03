/*----------------- Variable Declaration -------------------*/
const navList = document.querySelectorAll(".aside__nav ul li a");
const allSection = document.querySelectorAll(".section");
const aside = document.querySelector(".aside");
const navTogglerBtn = document.querySelector(".aside__toggle");
const contactBtn = document.querySelector(".hire__me");

/*------------------- Execution functions ------------------*/
navTogglerBtn.addEventListener("click", navToggler);
contactBtn.addEventListener("click", contact);

/*--------------------- Typing Animation -------------------*/
var typed = new Typed(".typing", {
    strings: ["", "Web Developer", "Computer Engineering Graduates"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

/*---------------------- Menu Toggler ----------------------*/
function navToggler() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    allSection.forEach(element => {
        element.classList.toggle("open");
    });
}

/*------------------------- Aside --------------------------*/
navList.forEach(a => {
    a.addEventListener('click', function () {
        const isCurrentClosed = !this.classList.contains('active');
        removeBackSection();
        navList.forEach((a, j) => {
            if (a.classList.contains('active')) {
                addBackSection(j);
                /* allSection[j].classList.add('back-section'); */
            }
            a.classList.remove('active')
        });
        if (isCurrentClosed) {
            this.classList.add("active");
            showSection(this);
            if (window.innerWidth < 1200) {
                navToggler();
            }
        }
    });
});

/*------------------------ Contact -------------------------*/
function contact() {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
}

function showSection(e) {
    allSection.forEach(element => {
        element.classList.remove("active");
    });
    const target = e.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(e) {
    navList.forEach(element => {
        element.classList.remove("active");
        const target = e.getAttribute("href").split("#")[1];
        if (target === element.getAttribute("href").split("#")[1]) {
            element.classList.add("active");
        }
    });
}

function removeBackSection() {
    allSection.forEach(element => {
        element.classList.remove("back-section");
    });
}

function addBackSection(num) {
    allSection[num].classList.add('back-section');
}