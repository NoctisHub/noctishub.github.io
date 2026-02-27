const button = document.getElementById("openBtn");
const windowEl = document.getElementById("window");
const header = document.querySelector(".window-header");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

button.addEventListener("click", () => {
    windowEl.style.display = "block";
    windowEl.style.left = "50%";
    windowEl.style.top = "50%";
    windowEl.style.transform = "translate(-50%, -50%)";
});

header.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - windowEl.offsetLeft;
    offsetY = e.clientY - windowEl.offsetTop;
    header.style.cursor = "grabbing";
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    header.style.cursor = "grab";
});

document.addEventListener("mousemove", (e) => {

    if (isDragging) {
        windowEl.style.left = (e.clientX - offsetX) + "px";
        windowEl.style.top = (e.clientY - offsetY) + "px";
    }

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const rotateY = (e.clientX - centerX) / 50;
    const rotateX = -(e.clientY - centerY) / 50;

    if (!isDragging) {
        windowEl.style.transform =
            `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
});
