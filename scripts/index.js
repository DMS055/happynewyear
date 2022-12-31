const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const iw = window.innerWidth;
const ih = window.innerHeight;

let hue = 120;
let fireworks = [];
let particles = [];
let timer = 5;
let tick = 0;

const loop = () => {
    window.requestAnimationFrame(loop);
}

(() => {
    canvas.width = cw;
    canvas.height = ch;
    window.addEventListener('load', loop)
})();