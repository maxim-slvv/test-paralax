const parallax = document.querySelector('.parallax');
const front = document.querySelector('.parallax__front');
const center = document.querySelector('.parallax__center');
const back = document.querySelector('.parallax__back');
//сенса
const sFront = 500;
const sBack = 2000;

parallax.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;

    front.style.transform = `translate(
        ${x / sFront}%,
        ${y / sFront}%
    )`;

    back.style.transform = `translate(
        ${x / sBack}%,
        ${y / sBack}%
    )`;
});