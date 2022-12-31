import Firework from "./firework.js";
import { random } from "./utilities.js";

const canvas = document.getElementById('canvas1');
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
    ctx.fillRect(0, 0, iw, ih);

    ctx.globalCompositeOperation ='lighter';

    var i = fireworks.length;
        while (i--) {
            fireworks[i].draw(ctx, hue);
            fireworks[i].update(i, particles, hue, fireworks, ctx);
        }

	var i = particles.length;
        while (i--) {
            particles[i].draw(ctx, hue);
            particles[i].update(i, particles, hue, fireworks, ctx);
        }

    if (tick >= timer) {
        fireworks.push(new Firework(iw / 2, ih, random(0, iw), random(0, ih / 2)));
        tick = 0;
    } else {
        tick++;
    }
};

// Audio
const playAudio = () => {
	var audio = new Audio("/audio/fireworks1.mp3");
	audio.play();
};

setInterval(playAudio, 23980);


(() => {
	canvas.width = iw;
	canvas.height = ih;
	window.addEventListener("load", loop);
})();