const usersData = [
    {
        fullName: "Alice Johnson",
        profilePhoto: "https://plus.unsplash.com/premium_photo-1687832783818-8857f0c07ea4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        time: "5 minutes ago",
        message: "Hey! How's your day going?"
    },
    {
        fullName: "Bob Smith",
        profilePhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        time: "12 minutes ago",
        message: "Did you finish the report?"
    },
    {
        fullName: "Charlie Brown",
        profilePhoto: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        time: "1 hour ago",
        message: "Let's catch up this weekend!"
    },
    {
        fullName: "Diana Prince",
        profilePhoto: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        time: "2 hours ago",
        message: "I loved the movie we saw!"
    },
    {
        fullName: "Ethan Hunt",
        profilePhoto: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        time: "Yesterday",
        message: "Can you send me the files?"
    },
    {
        fullName: "Fiona Gallagher",
        profilePhoto: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        time: "Yesterday",
        message: "Don't forget our meeting tomorrow!"
    },
    {
        fullName: "George Michael",
        profilePhoto: "https://example.com/photos/george.jpg",
        time: "3 hours ago",
        message: "Happy Birthday! Hope you have a great day!"
    },
    {
        fullName: "Hannah Baker",
        profilePhoto: "https://example.com/photos/hannah.jpg",
        time: "4 hours ago",
        message: "I'm really excited for the concert!"
    },
    {
        fullName: "Ian Malcolm",
        profilePhoto: "https://example.com/photos/ian.jpg",
        time: "1 day ago",
        message: "Let's plan a trip soon!"
    },
    {
        fullName: "Julia Roberts",
        profilePhoto: "https://example.com/photos/julia.jpg",
        time: "Yesterday",
        message: "Can we reschedule our call?"
    }
];

const usersofinsta = [
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
];

let about = document.querySelector(".about__section")
let growth = document.querySelector("#growth")
let full = document.querySelector(".full-screen");
// let overlay = document.querySelector(".overlay")
let box = document.querySelector("#about-box")


let sum = ""
usersData.forEach(function (elem, idx) {
    sum += `<div id="${idx} about-box" class="about-box">
                    <div class="profile-img">
                        <img src="${elem.profilePhoto}" alt="">
                    </div>
                    <div class="profile-text">
                        <div class="heading">
                            <h1>${elem.fullName}</h1>
                            <h6>${elem.time}</h6>
                        </div>
                        <div class="message">
                            <p>${elem.message}</p>
                        </div>
                    </div>
                </div>`
});

about.innerHTML = sum

console.log('dets')


box.addEventListener('click', function(dets){
    console.log(dets)
})

