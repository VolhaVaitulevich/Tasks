export class Circle {
	radius: number;
	constructor(radius: number) {
		this.radius = radius;
	}

	getArea(): number {
		return Math.PI * Math.pow(this.radius, 2);
	}
	getPerimeter(): number {
		return Math.PI * this.radius * 2;
	}
}
