import { random } from "./utilities";

export class Particle {
    constructor(x, y, hue) {
        this.x = x;
        this.y = y;

        this.coordinates = [];
        this.coordinateCount = 5;

        while (this.coordinateCount--) {
            this.coordinates.push([this.x, this.y]);

        }
        this.angle = random(0, 2 * Math.PI);
        this.speed = random(1, 10);

        this.friction = 0.95;
        this.gravity = 1;

        this.hue = random(hue - 50, hue + 50);
        this.brightness = random(50, 80);
        this.alpha = 1;
        this.decay = random(0.015, 0.03);

    }

    draw(ctx) { }
    update(index, particles) { }
}