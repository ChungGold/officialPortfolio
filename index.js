// TYPING ANIMATION
const introHeader = document.getElementById('introHeader');
const introP = document.getElementById('introP');

let counter = -1;

const header = 'Hello, my name is Chung Au';

const arr = header.split('');

let title = arr[counter];

const timer = 100;

let levin = setInterval (type = () => {
    counter++;
    title = arr[counter];
    introHeader.innerHTML +=
    `<a class = 'letters'>${title}</a>`
}, timer);

setTimeout(stop = () => {
    clearInterval(levin);
    introP.classList.add('slideIn');
}, arr.length * timer);

// Click Scroll

let arrow = document.getElementById('arrow');

arrow.addEventListener('click', ()=> {
    window.scrollTo(0, 937);
});


let projects = document.getElementsByClassName('projectCards');





// PAGE ROTATE
// const button = document.getElementById('navButton');

// button.addEventListener('click', movePage = () => {

// });

