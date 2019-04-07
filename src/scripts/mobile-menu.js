//Burger menu

const navMobile = document.querySelector('.js-menu');
const openBtn = document.querySelector('.js-open-menu');
const closeBtn = document.querySelector('.js-close-btn');

openBtn.addEventListener("click", function () {
    navMobile.style.display = "block";
    document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", function () {
    navMobile.style.display = "none";
    document.body.style.overflow = "initial";
});