class Circle {
	radius: number;
	constructor(radius: number) {
		this.radius = radius;
	}

	getArea() {
		return Math.PI * Math.pow(this.radius, 2);
	}
	getperimeter() {
		return Math.PI * this.radius * 2;
	}
}
