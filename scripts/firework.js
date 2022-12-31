import { calcDistance } from "./utilities";

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
        ctx.strokeStyle = `hsl(${hue}, 100%, ${this.brightness})%`;
        ctx.stroke();
    }
}