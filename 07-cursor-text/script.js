function gsapAnimation() {
    gsap.to("#cursor", {
        duration: '1.5',
        ease: "power1.inOut"
    })
}
gsapAnimation()


function cursorAnimation() {
    
    let body = document.querySelector('body');
    let cursor = document.querySelector('#cursor');
    let h1 = document.querySelector('#h1');

    body.addEventListener('mousemove', function(det){
        cursor.style.left = det.x + 'px';
        cursor.style.top = det.y + 'px';
    });

    h1.addEventListener('mouseenter', function(){
        cursor.style.scale = 3;
    });

    h1.addEventListener('mouseleave', function(){
        cursor.style.scale = 1;
    });

}

cursorAnimation();
