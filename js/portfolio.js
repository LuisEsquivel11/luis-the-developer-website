
(function() {
"use strict"

//------------------------------------- Loading Screen ----------------------------//
        const loadingScreen = document.querySelector('.loading-screen');
    window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 1000);
    });


//-----------------------------------Nav Bar ---------------------------------------//
const dropdowns = document.querySelectorAll('li.parent');
for(let dropdown of dropdowns) {
    let toggle = dropdown.querySelector('.toggle');
    toggle.addEventListener('click', () => {
        dropdown.classList.toggle('show');
    });
}
const contactLink = document.querySelector('li.contact');
const contactModal = document.querySelector('div.modal');
const modalBackground = document.querySelector('div.modal-bg');
const hero = document.querySelector('.hero');
contactLink.addEventListener('click', () => {
    contactModal.style.zIndex = 999;
});
modalBackground.addEventListener('click', () => {
    contactModal.style.zIndex = -5;
});
    document.addEventListener("DOMContentLoaded", () => {
        const navbarItems = document.querySelector(".nav-item");
    });



//-----------------------------------Nav Bar End ---------------------------------------//
//-----------------------------------Hero Animations ------------------------------------//
const imageContainer = document.querySelector('.image-container');


    const nameTitle = document.querySelector('.name-title');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const opacity = 1 - scrollPosition / 150;

    nameTitle.style.opacity = opacity.toString();
})
const image = document.querySelector('.hero-image')
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const opacity = 1 - scrollPosition / 350;
    const width = 500 + (scrollPosition / 2)
    const height = 663 + (scrollPosition / 2 )
    const size = 700 + (scrollPosition /4)
    imageContainer.style.opacity = opacity.toString()
    imageContainer.style.width = `${size}px`
    imageContainer.style.height = `${size}px`
    // image.style.height = `${width}px`
    // image.style.width =  `${height}px`

})
    window.addEventListener('scroll', () => {
        const imageContainer = document.querySelector('.image-container');
        const scrollPosition = window.scrollY;
        if (imageContainer.style.opacity === "0.3" ) {
            window.scrollTo(0, 1500)
        }
    })

    function slideDownAnimation(timestamp) {
        const duration = 1000; // Animation duration in milliseconds
        const start = -500; // Starting margin-top
        const end = 175; // Final margin-top
        const elapsed = Math.min(timestamp - startTimestamp, duration); // Ensure elapsed time doesn't exceed duration
        const progress = elapsed / duration; // Calculate animation progress

        const marginTop = start + (end - start) * progress;
        imageContainer.style.marginTop = marginTop + 'px';

        if (progress < 1) {
            requestAnimationFrame(slideDownAnimation);
        }
    }

    function increaseOpacity(timestamp) {
        const duration = 1000;
        const start = -1;
        const end = 1;
        const elapsed = Math.min(timestamp - startTimestamp, duration);
        const progress = elapsed / duration;

        const opacity = start + (end - start) * progress;
        nameTitle.style.opacity = opacity.toString();
        if (progress < 1) {
            requestAnimationFrame(increaseOpacity)
        }
    }



    let startTimestamp;
    function startAnimation() {
        startTimestamp = performance.now();
        requestAnimationFrame(slideDownAnimation);
        requestAnimationFrame(increaseOpacity);
    }


    window.addEventListener('DOMContentLoaded', () => {
        startAnimation();

    });




//-----------------------------------About Section Animations------------------------------------//

    const spinner = document.getElementById("spinner-png");
    let rotationAngle = 0;
    function rotateImageOnScroll() {
        const scrollDirection = event.deltaY > 0 ? 1 : -1;
        rotationAngle += scrollDirection * 10; // Adjust rotation speed as needed
        spinner.style.transform = `rotate(${rotationAngle}deg)`;
    }
    document.addEventListener("wheel", rotateImageOnScroll);




})();
