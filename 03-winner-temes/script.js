// Get all teams
let teams = ['CSK', 'MI', 'KKR', 'GT', 'SRH', 'RR', 'LSG', 'PBKS', 'DC'];

let btn = document.querySelector('button');
let text = document.querySelector('h1');

btn.addEventListener('click', function () {

    let num = Math.floor(Math.random() * teams.length);

    text.innerHTML = teams[num];
});

//gsap animation

gsap.from('.main', {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: 'power2.out'
});

gsap.from('.navbar', {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'power2.out',
    delay: 0.5
});

gsap.from('.home .content', {
    duration: 1,
    opacity: 0,
    scale: 0.5,
    ease: 'back.out(1.7)',
    delay: 1
});

