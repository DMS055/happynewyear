import { random } from "./utilities";

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

    hue = random(0, 360);
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, cw, ch);
    ctx.globalCompositeOperation ='lighter';

    for (let i = fireworks.length; i > 0; i--) {
        fireworks[i].draw(ctx, hue);
        fireworks[i].update(i, particles, hue, fireworks, ctx)
    }

    for (let i = particles.length; i > 0; i--) {
        particles[i].draw(ctx);
    }
};

(() => {
    canvas.width = cw;
    canvas.height = ch;
    window.addEventListener('load', loop)
})();