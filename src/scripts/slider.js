const slides = [
    {
        title: 'UX Research Pages',
        image: '/src/images/content/works/ux_research_pages.jpg',
        tags: ['HTML', 'CSS', 'JavaScript'],
        description: 'Lecture and other learning resources about User Experience Research for designers, managers, and developers.',
        link: 'https://github.com/ux-research-pages/UX-Research',
    },
    {
        title: 'UX Profile Page',
        image: '/src/images/content/works/ux_profile_page.jpg',
        tags: ['LESS', 'Bootstrap', 'PUG'],
        description: 'This page I collected everything I did when I worked as a User Experience Researcher.',
        link: 'https://marypavlenko.github.io/UX-Profile/',
    },
    {
        title: 'Landing page for a burgers restaurant',
        image: '/src/images/content/works/burger.jpg',
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
const previewPicture = slider.querySelector('.js-small-slide');
let currentSlide = 0;

console.log(previewPicture);

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

    // for (previewPicture.length = 0; previewPicture.length > 3; previewPicture.length++) {
    //     upSlide.addEventListener('click', function () {
    //         previewPicture.classList.remove(activeClass);
    //     };
    // };


    // for (var i = 0; i < previewPicture.length; i++) {
    //     upSlide.addEventListener('click', function () {
    //         previewPicture.classList.remove(activeClass);
    //     };
    // }
    //
    // previewPicture[currentSlide].classList.add('works__item--active');

    slides[currentSlide].tags.forEach(function (tag) {
        const newElement = document.createElement('div');

        newElement.classList.add('works__technology-item');

        newElement.innerText = tag;
        tags.appendChild(newElement);
    });
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