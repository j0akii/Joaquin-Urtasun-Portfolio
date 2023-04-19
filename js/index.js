let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('act');
}

////////////////////////////////////

const downloadButton = document.querySelector('#downloadFile')

downloadButton.addEventListener('click', (event) => {
    event.preventDefault();
    const pdfUrl = 'https://j0akii.github.io/Joaquin-Urtasun-Portfolio/CV/Curriculum-vitae.pdf';
        fetch(pdfUrl)
            .then(response => response.blob())
            .then(blob => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Curriculum-vitae.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            });
})


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove('act');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('act');
            })
        }
    });

    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('act');
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let darkModeIcon = document.querySelector('#darkIcon');

darkModeIcon.onclick = () => {

    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
}

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
})

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.img-home img, .iconContainer, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });


