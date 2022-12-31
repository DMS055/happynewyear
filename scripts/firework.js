import { calcDistance, createParticles, random } from "./utilities.js";

class Firework {
	constructor(sx, sy, tx, ty) {
		this.x = sx;
		this.y = sy;

		this.sx = sx;
		this.sy = sy;

		this.tx = tx;
		this.ty = ty;

		this.distToTarget = calcDistance(sx, sy, tx, ty);
		this.distTravelled = 0;

		this.coordinates = [];
		this.coordinateCount = 3;

		while (this.coordinateCount--) {
			this.coordinates.push([this.x, this.y]);
		}

		this.angle = Math.atan2(ty - sy, tx - sx);
		this.speed = 2;
		this.acc = 1.05;
		this.brightness = random(50, 70);
	}

	draw(ctx, hue) {
		ctx.beginPath();

		ctx.moveTo(
			this.coordinates[this.coordinates.length - 1][0],
			this.coordinates[this.coordinates.length - 1][1]
		);
		ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = `hsl(${hue}, 100%, ${this.brightness}%)`;

		ctx.stroke();
	}

	update(index, particles, hue, fireworks, ctx) {
		this.coordinates.pop();
		this.coordinates.unshift([this.x, this.y]);

		this.speed *= this.acc;

		let vx = Math.cos(this.angle) * this.speed;
		let vy = Math.sin(this.angle) - this.speed;

		this.distTravelled = calcDistance(
			this.sx,
			this.sy,
			this.x + vx,
			this.y + vy
		);

		if (this.distTravelled >= this.distToTarget) {
			createParticles(this.tx, this.ty, particles, ctx, hue);

			fireworks.splice(index, 1);
		} else {
			this.x += vx;
			this.y += vy;
		}
	}
}

export default Firework;