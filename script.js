const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const img = document.querySelectorAll('#imgs img');

let idx = 0;
function changeImage() {
    imgs.style.transform = `translateX(-500px)`
}
rightBtn.addEventListener('click', changeImage)






