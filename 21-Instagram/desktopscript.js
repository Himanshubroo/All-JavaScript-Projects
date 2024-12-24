let users = [
    {
        dp: "https://images.unsplash.com/photo-1644523729338-f00c0b6ed5a4?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Girl 1",
    },
    {
        dp: "https://images.unsplash.com/photo-1734126801303-06da3e3f2db6?q=80&w=1390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0b3J5fGVufDB8fDB8fHww",
        username: "Girl 2",
    },
    {
        dp: "https://images.unsplash.com/photo-1684187998021-887041ad6071?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
        story: "https://images.unsplash.com/photo-1732740674539-74d1f760acfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
        username: "Girl 3",
    },
    {
        dp: "https://images.unsplash.com/photo-1729641246245-64405c363263?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
        story: "https://plus.unsplash.com/premium_photo-1690522330763-7cdc0f1eecc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
        username: "Girl 4",
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1682092039530-584ae1d9da7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        username: "Girl 5",
        story: "https://images.unsplash.com/photo-1733869877439-05809aadb5fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1730941343980-5d81ce7c768b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1694507482314-a429436d4a0a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Girl 6",
    },
]

let stories = document.querySelector("#stories");
let full = document.querySelector(".full");
let fulluser = document.querySelector(".full h1");
let growth = document.querySelector("#growth");
let sum = "";

users.forEach((elem, idx) => {
    sum += `<div class="story">
                            <img id=${idx} src=${elem.dp}
                                alt="Story Image">
                        </div>`
});

stories.innerHTML = sum;

stories.addEventListener('click', function (dets) {
    let grow = 0;
    let data = users[dets.target.id];

    let int = setInterval(function () {
        grow++
        growth.style.width = grow + "%";
    }, 30)

    full.style.display = "block";
    full.style.backgroundImage = `url(${data.story})`;
    fulluser.innerHTML = data.username;

    setTimeout(() => {
        full.style.display = "none";
        clearInterval(int);
    }, 3000);

});


