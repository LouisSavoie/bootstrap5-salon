// DOM SELECTIONS
const toplink = document.querySelector('#toplink');

// VARIABLES
const vw = document.documentElement.clientHeight;

// EVENTS

// On Scroll
window.onscroll = function () {
    // Scroll Down From Top
    if (document.body.scrollTop >= vw*.6  || document.documentElement.scrollTop >= vw*.6) {
        // Toplink Display
        toplink.classList.remove("d-none");
    } 
    // Scroll To Top
    else {
        // Toplink Display None
        toplink.classList.add("d-none");
    }
};