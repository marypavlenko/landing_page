const slides = [
    {
        title: 'UX Research Pages',
        image: '/src/images/content/works/parachute.jpg',
        tags: ['HTML', 'CSS', 'JavaScript'],
        description: 'This girl learning web development! 4 months only the most difficult trials and sleepless nights!',
        link: '#',
    },
    {
        title: 'UX Profile Page',
        image: '/src/images/content/works/valley.jpg',
        tags: ['LESS', 'Bootstrap', 'PUG'],
        description: 'This girl learning web development! 4 months only the most difficult trials and sleepless nights!',
        link: '#',
    },
    {
        title: 'Landing page for a burgers restaurant',
        image: '/src/images/content/works/city.jpg',
        tags: ['Webpack', 'SASS', 'Git'],
        description: 'This girl learning web development! 4 months only the most difficult trials and sleepless nights!',
        link: '#',
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