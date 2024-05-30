const header = document.querySelector("header");
const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');
const topo = document.getElementById("top");
let count = 1;

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 40);
    topo.classList.toggle("show-top", window.scrollY > 140);
    topo.classList.toggle("hide-top", window.scrollY < 140);
});

menu.onclick = () => {
    navlist.classList.toggle('open');
    header.classList.toggle("sticky", window.scrollY < 90 && !navlist.classList.contains('open'));
    menu.classList.toggle('bx-x');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

window.onload = () => {
    topo.classList.toggle("hide-top");
}

document.getElementById("radio1").checked = true;
setInterval(nextImage, 5000);

function nextImage() {
    count++;
    if (count > 8) {  // Alterado para 8
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}
const carousel = new bootstrap.Carousel('#myCarousel')