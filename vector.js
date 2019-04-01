class Vector {
    
    constructor(x, y) {
		this.x = x;
		this.y = y;
		
    }
	
	addVector(vec) {
		this.x += vec.x;
		this.y += vec.y;
		return this;
	}
	
	// Functions For HW
	subVector(vec) { // subtracting vectors
		
	}
	
	scale(s) { // scale vectors
		
	}
	
	toString() {
		return '<'+ this.x+', '+this.y+'>';
	}

}