class Vector {
    
		constructor(x, y) {
		this.x = x;
		this.y = y;

	}

	addVector(vec) { // Add vector location
		this.x += vec.x;
		this.y += vec.y;
		return this;
	}


	subVector(vec) { // Subtract vector location
		this.x -= vec.x;
		this.y -= vec.y;
		return this;
	}

	scale(s) { // Scale vector location
		this.x *= s
		this.y *= s
		return this;
	}

	toString() {
		return '<'+ this.x+', '+this.y+'>';
	}
	
	Print() {
		console.log(this.toString());
	}


}