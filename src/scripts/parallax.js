const parallaxContainer = document.querySelector('.parallax');
const parallaxItems = parallaxContainer.querySelectorAll('.parallax__layer');

function moveLayers(wScroll) {
    Array.from(parallaxItems).forEach(item => {
        const speed = item.dataset.speed;
        if (speed) {
            const persentAdd = wScroll * speed / 2;
            const transform = `translateY(-${persentAdd}%)`;
            item.style.transform = transform;
        }
    })
}

window.addEventListener('scroll', function () {
    const wScroll = window.pageYOffset;
    moveLayers(wScroll)
});

