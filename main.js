"use strict";

const menuBtn = document.querySelector('#menu-btn');
const navMenu = document.querySelector('#navbar2');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener
    ('click', () => {
        menuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    })); 
// END OF HAMBURGER MENU