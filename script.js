// DOM SELECTIONS
const toplink = document.querySelector('#toplink');
const nav = document.querySelector('nav');
const brand = document.querySelector('.navbar-brand');
const toggler = document.querySelector('.navbar-toggler');
const navUl = document.querySelector('.navbar-nav');
const navLinks = document.querySelector('.nav-link');

// VARIABLES
const vw = document.documentElement.clientHeight;

// EVENTS

// On Scroll
window.onscroll = function () {
    // Scroll Down From Top
    if (document.body.scrollTop >= vw*.6  || document.documentElement.scrollTop >= vw*.6) {
        // Toplink Display
        toplink.classList.remove("d-none");
        // Navbar
        nav.classList.remove('navbar-expand-md');
        nav.classList.remove('bg-white');
        nav.classList.remove('shadow');
        nav.classList.add('nav-transparent');
        brand.classList.add('d-none');
        toggler.classList.add('ms-auto');
        toggler.classList.add('text-shadow');
        navUl.classList.add('pe-4');
        navLinks.classList.add('text-shadow');
    } 
    // Scroll To Top
    else {
        // Toplink Display None
        toplink.classList.add("d-none");
        // Navbar
        nav.classList.add('navbar-expand-md');
        nav.classList.remove('nav-transparent');
        nav.classList.add('bg-white');
        nav.classList.add('shadow');
        brand.classList.remove('d-none');
        toggler.classList.remove('ms-auto');
        toggler.classList.remove('text-shadow');
        navUl.classList.remove('pe-4');
        navLinks.classList.remove('text-shadow');
    }
};