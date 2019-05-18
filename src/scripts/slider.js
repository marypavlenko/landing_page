const slides = [
    {
        title: 'UX Research Pages',
        image: '/src/images/ux_research_pages.jpg',
        tags: ['HTML', 'CSS', 'JavaScript'],
        description: 'Lecture and other learning resources about User Experience Research for designers, managers, and developers.',
        link: 'https://github.com/ux-research-pages/UX-Research',
    },
    {
        title: 'UX Profile Page',
        image: '/src/images/ux_profile_page.jpg',
        tags: ['LESS', 'Bootstrap', 'PUG'],
        description: 'This page I collected everything I did when I worked as a User Experience Researcher.',
        link: 'https://marypavlenko.github.io/UX-Profile/',
    },
    {
        title: 'Landing page for a burgers restaurant',
        image: '/src/images/burger.jpg',
        tags: ['Webpack', 'SASS', 'Git'],
        description: 'The first training work to practice layout skill. Mentor: Olga Bolotova (@OlBol)',
        link: 'https://marypavlenko.github.io/burgers/',
    }
];

const slider = document.querySelector('.js-slider');
const mainSlide = slider.querySelector('.js-main-slide');
const tags = slider.querySelector('.js-slide-tags');
const slideTitle = slider.querySelector('.js-slide-title');
const slideDescription = slider.querySelector('.js-slide-description');
const slideLink = slider.querySelector('.js-slide-link');
const upSlide = slider.querySelector('.js-scroll-up');
const downSlide = slider.querySelector('.js-scroll-down');
const previewPicture = slider.querySelectorAll('.js-small-slide');
const numberElem = slider.querySelector('.js-number');
let currentSlide = 0;

function slideLimiter(value) {
    if (value >= slides.length) {
        return 0;
    } else if (value < 0) {
        return slides.length - 1;
    } else {
        return value;
    }
}

function fillSlider() {
    mainSlide.src = slides[currentSlide].image;
    slideTitle.innerText = slides[currentSlide].title;
    slideDescription.innerText = slides[currentSlide].description;
    slideLink.href = slides[currentSlide].link;
    tags.innerHTML = '';
    numberElem.innerText = currentSlide + 1;

    slides[currentSlide].tags.forEach(function (tag) {
      const newElement = document.createElement('div');

      newElement.classList.add('works__technology-item');

      newElement.innerText = tag;
      tags.appendChild(newElement);
    });

    for (let i = 0; i < previewPicture.length; i++) {
      previewPicture[i].classList.remove('works__item--active');
    }

    previewPicture[currentSlide].classList.add('works__item--active');
}

upSlide.addEventListener('click', function () {
    currentSlide = slideLimiter(currentSlide - 1);

    fillSlider();

});

downSlide.addEventListener('click', function () {
    currentSlide = slideLimiter(currentSlide + 1);

    fillSlider();
});

fillSlider();