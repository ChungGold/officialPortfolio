// TYPING ANIMATION
let introHeader = document.getElementById('introHeader');
let introP = document.getElementById('introP');

let counter = -1;

let header = 'Hello, my name is Chung Au';

let arr = header.split('');

let title = arr[counter];

const timer = 100;

// introHeader.innerHTML +=
// `<div id = 'blinker'></div>`

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



// PAGE ROTATE
// const button = document.getElementById('navButton');

// button.addEventListener('click', movePage = () => {

// });

