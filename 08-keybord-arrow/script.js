// let h1 = document.querySelector('#h1')
// document.addEventListener('keydown', function (dets) {
//     h1.innerHTML = dets.code
// })
let img = document.querySelector('img');
let body = document.querySelector('boby');
let imgX = 0
let imgY = 0
document.addEventListener('keydown', function (dets) {
    if (dets.code == "ArrowRight") {
        imgX++
        img.style.left = imgX + '%'
        
    }
    else if (dets.code == "ArrowLeft") {
        imgX--
        img.style.left = imgX + '%' 
    }
    else if(dets.code == "ArrowUp"){
        imgY--
        img.style.top = imgY + '%';
    }
    else if(dets.code == "ArrowDown"){
        imgY++
        img.style.top = imgY + '%'
    }
    
    

})


gsap.to('img', {
    delay: 1,
    duration: 1,
    ease: 'power1.inOut'
})