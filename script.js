// DOM SELECTIONS
const toplink = document.querySelector('#toplink');

// VARIABLES
const vh = document.documentElement.clientHeight;

// EVENTS

// On Scroll
window.onscroll = function () {
    // Scroll Down From Top
    if (document.body.scrollTop >= vh  || document.documentElement.scrollTop >= vh) {
        // Toplink Display ON
        toplink.classList.remove("d-none");
    } 
    // Scroll To Top
    else {
        // Toplink Display OFF
        toplink.classList.add("d-none");
    }
};