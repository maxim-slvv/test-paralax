const parallax = document.querySelector('.parallax');
const front = document.querySelector('.parallax__front');
const back = document.querySelector('.parallax__back');
const way = document.querySelector('.parallax__way');
//сенса
const sFront = 800;
const sBack = 1500;
const sWay = 5000;

parallax.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;
    if(Math.max(
        document.body.scrollWidth,
        document.body.offsetWidth,
        document.body.clientWidth) > 1300){ //если ширина экрана будет меньше 1300 то паралакс прекратится
        front.style.transform = `translate(
            ${x / sFront}%,
            ${y / sFront}%
        )`;
        back.style.transform = `translate(
            ${x / sBack}%,
            ${y / sBack}%
        )`;
        way.style.transform = `translate(
            ${x / sWay}%,
            ${y / sWay}%
        )`;
    }
});
console.log('red')