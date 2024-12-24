let btn = document.querySelector('button');
let content = document.querySelector('.home-content')
let images = [
    'https://imgs.search.brave.com/tTiFxz3i3LJAE4USs_IQGDSjokI1h7umcTBmAvOsAew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/My9CdWctUE5HLTYu/cG5n',
    'https://cdn.pixabay.com/photo/2012/04/02/14/24/bee-24633_960_720.png',
    'https://cdn.pixabay.com/photo/2018/07/09/17/44/baby-elephant-3526681_960_720.png',
    'https://cdn.pixabay.com/photo/2017/07/01/09/02/butterfly-2460931_960_720.png'
]


btn.addEventListener('click', function () {

    let valueX = Math.random() * 90;
    let valueY = Math.random() * 90;
    let rotate = Math.random() * 360;
    let imgRandom = Math.floor(Math.random() * images.length);

    let img = document.createElement('img')
    img.setAttribute('src', images[imgRandom])
    img.style.height = '50px';
    img.style.position = 'absolute'
    img.style.left = valueX + '%';
    img.style.top = valueY + '%';
    img.style.rotate = rotate + 'deg';

    content.appendChild(img)

})
