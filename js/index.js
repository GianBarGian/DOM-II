const buttons = document.querySelectorAll('.btn');
const honkingSound = document.querySelector('audio');
const h2s = document.querySelectorAll('h2');
const h4s = document.querySelectorAll('h4');
const paragraphs = document.querySelectorAll('p');
const images = document.querySelectorAll('img');
const img = document.querySelector('img');
const navLinks = document.querySelectorAll('.nav-link')
let dragged;


const honk = event => honkingSound.play();
const resizeText = event => {
    event.stopImmediatePropagation();
    event.target.style.transform = "scale(1.1, 1.1)";
}
const resizeTextBig = event => {
    event.stopPropagation();
    event.target.style.transform = "scale(1.5, 1.5)";
}
const normalSize = event => {
    event.stopPropagation();
    event.target.style.transform = "scale(1, 1)";
}


buttons.forEach(button => button.addEventListener("click", honk));

h2s.forEach(h2 => h2.addEventListener("mouseover", resizeText));
paragraphs.forEach(p => p.addEventListener("mouseover", resizeText));
h4s.forEach(h4 => h4.addEventListener("mouseover", resizeText));

h2s.forEach(h2 => h2.addEventListener("mouseover", resizeTextBig));
paragraphs.forEach(p => p.addEventListener("mouseover", resizeTextBig));
h4s.forEach(h4 => h4.addEventListener("mouseover", resizeTextBig));

h2s.forEach(h2 => h2.addEventListener("mouseleave", normalSize));
paragraphs.forEach(p => p.addEventListener("mouseleave", normalSize));
h4s.forEach(h4 => h4.addEventListener("mouseleave", normalSize));


navLinks.forEach(navLink => navLink.addEventListener('click', event => event.preventDefault()));

// Will work on this later on! It's kinda long to implement
// images.forEach(img => img.addEventListener("dragstart", event => {
//     dragged = event.target;
//     event.target.style.opacity = .5;
// }))
// images.forEach(img => img.addEventListener("dragend", event => {
//     event.preventDefault();
//         dragged.style.display = "none";
    
// }))


