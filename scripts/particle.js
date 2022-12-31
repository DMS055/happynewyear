import { random } from "./utilities.js";

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

	draw(ctx) {
		ctx.beginPath();
		ctx.moveTo(
			this.coordinates[this.coordinates.length - 1][0],
			this.coordinates[this.coordinates.length - 1][1]
		);
		ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = `hsla(${this.hue}, 100%, ${this.brightness}%, ${this.alpha})`;

		ctx.stroke();
	}

	update(index, particles) {
		this.coordinates.pop();
		this.coordinates.unshift([this.x, this.y]);

		this.speed *= this.friction;

		this.x += Math.cos(this.angle) * this.speed;
		this.y += Math.sin(this.angle) * this.speed + this.gravity;

		this.alpha -= this.decay;

		if (this.alpha <= this.decay) {
			particles.splice(index, 1);
		}
	}
}