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
    `<a>${title}</a>`
}, timer);

setTimeout(stop = () => {
    clearInterval(levin);
    introP.classList.add('slideIn');
}, arr.length * timer);

// Click Scroll

let arrow = document.getElementById('arrow');

arrow.addEventListener('click', ()=> {
    window.scrollTo({
        left: 0, 
        top: 1050, 
        behavior: "smooth"});
});

// Project Cards
let projects = document.getElementsByClassName('projectCards');

for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener('click', ()=> {
        if (projects[i].classList.contains('expand') === true) {
            projects[i].classList.remove('expand');
            console.log('what');
        } else {
            projects[i].classList.add('expand');
        }
    });
}


//Letter hop
let letters = document.getElementsByClassName('project-title');
let icons = document.getElementsByClassName('icons');

for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener('mouseenter', () => {
        letters[i].classList.add('hop');
        setTimeout(()=> {
            letters[i].classList.remove('hop');
        }, 500)
    });
}

for (let j = 0; j < icons.length; j++) {
    icons[j].addEventListener('mouseenter', () => {
        icons[j].classList.add('hop');
        setTimeout(()=> {
            icons[j].classList.remove('hop');
        }, 3000)
    });
}

//Projects slideIn

let allProjects = document.getElementById('projects-container');

window.onscroll = () => {allProjects.classList.add('slideIn');}

