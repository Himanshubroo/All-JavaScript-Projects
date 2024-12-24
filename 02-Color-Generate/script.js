// ==================== Home ====================
let container = document.querySelector("#container")
let box = document.querySelector("#box");
let btn = document.querySelector("#btn");
let text = document.querySelector("#text");

btn.addEventListener('click', () => {
    
    let a1 = Math.floor(Math.random() * 255);
    let a2 = Math.floor(Math.random() * 255);
    let a3 = Math.floor(Math.random() * 255);

    box.style.backgroundColor = `rgb(${a1}, ${a2}, ${a3})`;
    container.style.backgroundColor = `rgb(${a3}, ${a2}, ${a1})`;
    text.innerText = `rgb(${a1}, ${a2}, ${a3})` ;
});
