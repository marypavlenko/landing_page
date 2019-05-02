const slideConteiner = document.querySelector('.reviews__blocks');
const childSlide = slideConteiner.children;
let currentPosition = 0;
const buttons = document.querySelector('.reviews__buttons');
const leftBtn = buttons.querySelector('.reviews__btn--left');
const rightBtn = buttons.querySelector('.reviews__btn--right');
console.log(childSlide[0], buttons, leftBtn, rightBtn);

leftBtn.addEventListener('click', function () {
    const elWidth = childSlide[0].offsetWidth;

    if (currentPosition < 0) {
        currentPosition = currentPosition + elWidth * 2;
        slideConteiner.style.transform = `translateX(${currentPosition}px)`;
    }
});

rightBtn.addEventListener('click', function () {
    const elWidth = childSlide[0].offsetWidth;

    if (currentPosition > -(elWidth * (childSlide.length - 1))) {
        currentPosition = currentPosition - elWidth * 2;
        slideConteiner.style.transform = `translateX(${currentPosition}px)`;
    }
});
