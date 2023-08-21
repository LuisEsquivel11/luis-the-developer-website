(function() {
"use strict"

//-----------------------------------Nav Bar ---------------------------------------//
const dropdowns = document.querySelectorAll('li.parent');
for(let dropdown of dropdowns) {
    let toggle = dropdown.querySelector('.toggle');
    toggle.addEventListener('click', ()=>{
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
modalBackground.addEventListener('click', ()=> {
    contactModal.style.zIndex = -5;
});
    document.addEventListener("DOMContentLoaded", () => {
        const navbarItems = document.querySelector(".nav-item");
    });








//-----------------------------------Nav Bar End ---------------------------------------//
//-----------------------------------Hero Animations ------------------------------------//
const nameTitle = document.querySelector('.name-title');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const opacity = 1 - scrollPosition / 300;

    nameTitle.style.opacity = opacity.toString();
})





//-----------------------------------Hero Animations End------------------------------------//





})();
