import { Particle } from "./particle";

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const calcDistance = (p1x, p1y, p2x, p2y) => {
    const xDist = p1x - p2x;
    const yDist = p1y - p2y;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

const createParticles = (x, y, hue, ctx, particles) => {
    let particleCount = 30;
    while(particleCount--) {
        particles.push(new Particle(x, y, hue, ctx, particles));
    }
}

export { random, calcDistance, createParticles };
