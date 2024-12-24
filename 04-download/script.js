let btn = document.querySelector('button a');
let h1 = document.querySelector('h1');
let growth = document.querySelector('#grow')
let grow = 0;
let num = Math.floor(Math.random() * 100);


btn.addEventListener('click', function () {

    let growInterval = setInterval(() => {
        grow++
        h1.innerHTML = grow + '%';
        growth.style.width = grow + '%';
    }, num);

    setTimeout(() => {
        clearInterval(growInterval)

        btn.innerHTML = 'Downloaded';
        btn.style.opacity = '0.4';
        btn.style.pointerEvents = 'none';
        btn.setAttribute('href', './Fonts/Gilroy/Gilroy-Regular.otf')

    }, num * 100);
});




