let btn = document.querySelectorAll('button')
let body = document.querySelector('.home')
btn.forEach(function (elem) {
    elem.addEventListener('click', function () {
        console.log(elem.innerHTML)
        body.style.backgroundColor = elem.innerHTML;
    })
})